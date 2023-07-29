/// <reference types="nativewind/types" />

type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    SheetNews: { news: News };
};

type News = {
    id: int;
    title: string;
    category: string;
    imagePath: string;
    dateReleased: string;
    timeToRead: string;
};


interface UserPreferences {
    themeReading: ThemeReading
    savedNews: News[];
    firstAccess: boolean;
    darkMode: boolean;
}

interface ThemeReading {
    background: string;
    brightest: number;
    fontSize: number;
}