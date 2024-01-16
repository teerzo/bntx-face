import { useState } from "react"




export default function UI({isMobile, ...props}) {

    return (
        <div className="ui">

            {isMobile ?
                <>
                    <div className="top-nav">
                        <h3> TOP NAV </h3>
                    </div>
                    <div className="mobile-background">
                        <h3> MOBILE BACKGROUND </h3>
                    </div>
                    <div className="bottom-nav">
                        <h3> BOTTOM NAV </h3>
                    </div>
                </>
                :
                <>
                    <div className="side-nav">
                        <h3> SIDE NAV </h3>
                    </div>
                    <div className="background">
                        <h3> BACKGROUND HERE </h3>
                    </div>
                    {/* <div className="bottom-nav">
                        <h3> BOTTOM NAV </h3>
                    </div> */}
                </>
            }
        </div>
    )
}