import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { HiOutlineLogin as SignInIcon } from 'react-icons/hi';

const Providers = [
    {
        id: 'google',
        icon: <GoogleIcon size={18} />,
        bgColor: '!bg-white',
        iconColor: 'text-black',
        textColor: 'text-black',
        label: 'Login with Google',
    },
    {
        id: 'github',
        icon: <GithubIcon size={18} />,
        bgColor: '!bg-white',
        iconColor: '!text-black',
        textColor: 'text-black',
        label: 'Login with Github',
    },
];

// Fungsi untuk menangani Google One-Tap Callback
async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken({
        token: response.credential,
        nonce: 'NONCE', // sesuaikan jika menggunakan nonce
    });

    if (error) console.error('Login Error:', error);
    else console.log('Login Successful:', data);
}

// Fungsi Sign In untuk GitHub atau OAuth lain
const signIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${window.location.origin}/guestbook`, // sesuaikan sesuai kebutuhan
        },
    });
    if (error) console.error('OAuth Login Error:', error);
};

const ChatAuth = () => {
    useEffect(() => {
        // Load Google Identity Services jika `g_id_onload` belum diinisialisasi
        const initializeGoogleOneTap = () => {
            /* global google */
            window.google.accounts.id.initialize({
                client_id: '768691540227-5emkif2ehaaua73cshhjppmsb0p44k9s.apps.googleusercontent.com', // ganti dengan Google Client ID
                callback: handleSignInWithGoogle,
                auto_select: false,
                cancel_on_tap_outside: false,
            });

            // Tampilkan one-tap prompt dari Google
            window.google.accounts.id.prompt();
        };

        if (typeof window !== 'undefined' && window.google && window.google.accounts) {
            initializeGoogleOneTap();
        }
    }, []);

    return (
        <>
            <div id="g_id_onload"
                data-client_id="768691540227-5emkif2ehaaua73cshhjppmsb0p44k9s.apps.googleusercontent.com" // tambahkan client ID di sini
                data-context="signin"
                data-callback={handleSignInWithGoogle}
                data-itp_support="true"
            />

            <div className="flex flex-col border-t border-stroke">
                <div className="space-y-5 pt-3 text-start text-neutral-700 dark:text-neutral-400">
                    <p className="text-xs sm:text-sm ml-1">
                        <span className="inline-block align-middle">
                            <SignInIcon size={16} className="min-w-4 text-start mr-[2px] mb-[2px]" />
                        </span>
                        <span>
                            Please sign in to send a message. Don’t worry, your data is safe—learn more in our{' '}
                            <Link
                                className="text-primary underline underline-offset-2"
                                target="_blank"
                                href="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>.
                        </span>
                    </p>

                    <div className={`flex items-start sm:items-center justify-start gap-2 sm:gap-4 !mt-3`}>
                        {Providers.map((button) => (
                            <button
                                key={button.id}
                                onClick={() => signIn(button.id)}
                                className={`btn flex justify-center whitespace-nowrap text-sm xs:text-base flex-1 xs:flex-none !p-2 outline outline-stroke outline-1 !border-none ${button.bgColor} ${button.iconColor}`}
                                data-umami-event={`Sign In to Chat: ${button.label}`}
                            >
                                {button.icon}
                                <span className={button.textColor}>{button.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatAuth;
