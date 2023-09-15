import uniqid from "uniqid";

const initialData = {
    personalInfo: {
        fullName: "Vinicius Costa",
        email: "vinicost@gmail.com",
        phoneNumber: "+55 54 99999 999",
        address: "São Paulo, Brazil",
    },

    sections: {
        educations: [
            {
                degree: "Bachelors in Civil Engineering",
                schoolName: "UFRGS",
                location: "Porto Alegre, Brazil",
                startDate: "08/2006",
                endDate: "07/2011",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                degree: "Master's Degree in Math",
                schoolName: "Hidden University",
                location: "New York City, US",
                startDate: "08/2020",
                endDate: "present",
                isCollapsed: true,
                isHidden: true,
                id: uniqid(),
            },
        ],

        experiences: [
            {
                companyName: "Município de Gramado",
                position: "Engenheiro Civil",
                location: "Gramado, RS, Brazil",
                description:
                    "Analyzed and Approved construction permits for buildings in the city. ",
                startDate: "08/2013",
                endDate: "02/2016",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                companyName: "Black Mesa Labs",
                position: "UX Research Assistant",
                location: "Berlin, Germany",
                description:
                    "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
                startDate: "04/2018",
                endDate: "02/2019",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
        ],
    },
};

export default initialData;