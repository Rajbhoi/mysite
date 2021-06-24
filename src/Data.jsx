export const siteData = {
    name: "Secret MindTech",
    header: {
        logo: {
            link: "/",
            name: "Secret MindTech",
            imgUrl: "http://www.secretmindtech.com/wp-content/uploads/2020/10/SMT-286x104-1.png",
        },
        menus: [
            {
                id: 1,
                url: "/",
                title: "Home",
                pageKey: "home",
            },
            {
                id: 2,
                url: "/about-us",
                title: "About US",
                pageKey: "about-us",
            },
            {
                id: 3,
                url: "/contact-us",
                title: "Contact US",
                pageKey: "contact-us",
            },
            {
                id: 4,
                isButton: true,
                title: "VISIT",
                url: "https://www.secretmindtech.com/",
            },
        ]
    },
    pages: [
        {
            id: 1,
            url: "/",
            title: "Home",
            pageKey: "home",
            content: {
                heroSection: [
                    {
                        id: 1,
                        title: "First Slide",
                        imageUrl: "https://www.w3schools.com/bootstrap/la.jpg"
                    },
                    {
                        id: 2,
                        title: "Second Slide",
                        imageUrl: "https://www.w3schools.com/bootstrap/chicago.jpg"
                    },
                    {
                        id: 3,
                        title: "Third Slide",
                        imageUrl: "https://www.w3schools.com/bootstrap/ny.jpg"
                    },
                ],
                gridSection: {
                    title: "We creating Best Solutions",
                    description: "We combine human imgenuity with intelligent technology to benefit society and safe responsible business. we are building an inclusive and diverse workforce",
                    data: [
                        {
                            id: 1,
                            title: "First's Grid",
                            subTitle: "Dummy content of card"
                        },
                        {
                            id: 2,
                            title: "Second's Grid",
                            subTitle: "Dummy content of card"
                        },
                        {
                            id: 3,
                            title: "Third's Grid",
                            subTitle: "Dummy content of card"
                        }
                    ]
                }
            }
        },
        {
            id: 2,
            url: "/about-us",
            title: "About US",
            pageKey: "about-us",
            content: {
                heading: "About Us",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        },
        {
            id: 3,
            url: "/contact-us",
            title: "Contact US",
            pageKey: "contact-us",
            content: {
                heading: "Reach Out To Us",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        },
    ],
    footer: {
        copyrightsText: "© 2020 Secret MindTech - All rights reserved",
        links: [
            {
                id: 1,
                title: "Terms and condition",
                url: "https://www.secretmindtech.com/",
            },
            {
                id: 2,
                title: "Privacy Policy",
                url: "https://www.secretmindtech.com/",
            },
        ],
        socialIcons: [
            {
                id: 1,
                name: "facebook",
                url: "https://www.facebook.com/",
                icon: "https://contactbook.app/img/facebook.png"
            },
            {
                id: 2,
                name: "Twitter",
                url: "https://www.twitter.com/",
                icon: "https://contactbook.app/img/twitter.png"
            }
        ]
    }
}