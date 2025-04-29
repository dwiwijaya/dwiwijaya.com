const LastUpdated = ({ t, lastUpdate }) => {
    return (
        <div className="text-left mt-4 sm:mt-8">
            <h2 className='text-2xl mb-2 leading-6'>{t('Sidebar.welcome')}</h2>
            <time className="text-[.8rem] text-subtext">
                {t("Sidebar.lastupdate")} : {lastUpdate}
            </time>
        </div>
    )
}

export default LastUpdated