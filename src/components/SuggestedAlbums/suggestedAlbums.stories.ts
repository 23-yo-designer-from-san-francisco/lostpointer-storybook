import { SuggestedAlbums } from 'components/SuggestedAlbums/suggestedAlbums';

export default {
    title: 'Components/SuggestedAlbums',
    component: SuggestedAlbums,
};

export const Default = (args) => {
    return new SuggestedAlbums(args).render();
};

Default.args = {
    albums: [
        {props: {
            artwork: "21a774e7-b4fd-4ded-a074-bfe1482a4567",
            artwork_color: "#DA2F3B",
            id: 641,
            title: "Раскраски для взрослых",
            tracks_duration: 2013,
            year: 2018,
        }},
        {props: {
                artwork: "1a923829-f844-475c-a199-413ed6696222",
                artwork_color: "#372F32",
                id: 644,
                title: "Super KICA 8bit - Single",
                tracks_duration: 143,
                year: 2017,
            }
        },
        {props:{
            artwork: "4bd10604-27a8-45d6-a0b6-b7f07b8a0fc3",
            artwork_color: "#CF1994",
            id: 646,
            title: "Последняя дискотека (feat. БЦХ) - Single",
            tracks_duration: 164,
            year: 2017,}
        },
        {props: {
                artwork: "8aa26aae-827a-4086-9dc9-42d57f6820b4",
                artwork_color: "#D6D2D3",
                id: 648,
                title: "Я Лиза - EP",
                tracks_duration: 1208,
                year: 2017,
            }
        },
        {props: {
                artwork: "e8d30900-e884-469d-817b-a6d1f89dba13",
                artwork_color: "#7C2C1B",
                id: 647,
                title: "Ушла к реалисту - Single",
                tracks_duration: 212,
                year: 2017,
            }
        },
        {props:{
            artwork: "fc221417-301f-4bdc-9319-70491411fad8",
            artwork_color: "#7A7A7A",
            id: 645,
            title: "Папочка, прости - Single",
            tracks_duration: 206,
            year: 2017,
        }
        },
        {props:{
            artwork: "7851c7c3-4a77-4bf9-9a6f-84426e3cfc4c",
            artwork_color: "#3F181A",
            id: 643,
            title: "Гоша Рубчинский - Single",
            tracks_duration: 159,
            year: 2016,
        }}
    ]
};
