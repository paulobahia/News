/// <reference types="nativewind/types" />

type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    SheetNews: { news: News };
};

type News = {
    title: string;
    category: string;
    imagePath: string;
    dateReleased: string;
    timeToRead: number;
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