import React from 'react';



const Footer = (props) => {
    // console.log(siteData)
    const { foot } = props
    return (
        <>
            <div className='text-center .bg-info'>
                {/* {
                siteData.footer.copyrightsText 
                    ?
                    <p>{siteData.footer.copyrightsText}</p> 
                    :
                    <p>NO Data</p>
            } */}


                {foot.links && foot.links.map((link, key) => {
                    console.log(key)
                    const { title } = link
                    return (
                        <p>{title}</p>
                    )
                })
                }
                {foot.socialIcons && foot.socialIcons.map((socialIcons, key) => {
                    //socialIcons console.log(socialIcons)
                    const { icon, url } = socialIcons
                    return (
                        <>
                            <a href={url} className="link-primary ">
                                <img src={icon} className="img-thumbnail" alt={icon}></img>
                            </a>
                        </>
                    )
                })
                }
                {
                    // foot && foot.copyrightsText &&
                    <p>{foot.copyrightsText}</p>

                }

                {/* <h1 className={(siteData.foot.copyrightsText ? 'solid' : 'outline')}>ok</h1> */}
                {/* <h1>{siteData.footer.copyrightsText}</h1> */}
                {/* siteData.pages[0].content.heroSection.map((page) => {

            } */}
                {/* <h2>{siteData.footer.links[0]}</h2>
            <h3>{siteData.footer.socialIcons[1]}</h3> */}
            </div>
        </>
    )

}

export default Footer;