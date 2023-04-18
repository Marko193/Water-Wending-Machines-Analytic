import React from "react";

const GoogleHeader = props => {

    return (
        <div className="header-google-docs">
                    <span onClick={() => window.open("https://forms.gle/upuuL7gLnbGHSM4BA", "_blank")}>
                        Уважаемые партнеры. Договор публичной оферты доступен здесь. Для
                        заполнения формы и создания нового филиала пишите в dmsupport@ecosoft.com
                        </span>
        </div>
    )
}

export default GoogleHeader;