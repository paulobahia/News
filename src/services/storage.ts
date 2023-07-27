import { MMKV } from 'react-native-mmkv'

class StorageService {
    private storage: MMKV;

    constructor() {
        this.storage = new MMKV({
            id: 'storage-News.'
        })
    }

    // UserPreferences

    saveUserPreferences = (preferences: UserPreferences) => {
        this.storage.set('user_preferences', JSON.stringify(preferences));
    };

    getUserPreferences = (): UserPreferences | null => {
        const preferences = this.storage.getString('user_preferences');
        return preferences ? JSON.parse(preferences) : null;
    };

    removeUserPreferences = () => {
        this.storage.delete('user_preferences');
    };

    // ReadingTheme

    getReadingTheme = (): ThemeReading | null => {
        const preferences = this.getUserPreferences();
        return preferences ? preferences.ThemeReading : null;
    };

    setReadingTheme = (theme: ThemeReading) => {
        const preferences = this.getUserPreferences();

        if (preferences) {
            preferences.ThemeReading = theme;
            this.saveUserPreferences(preferences);
        }
        else {
            const newPreferences: UserPreferences = {
                ThemeReading: theme,
                savedNews: [],
                firstAccess: true,
                DarkMode: false,
            };
            this.saveUserPreferences(newPreferences);
        }
    };

    // News

    getNews = (): News[] | null => {
        const preferences = this.getUserPreferences();
        return preferences ? preferences.savedNews : null;
    };

    saveNews = (news: News) => {
        let preferences = this.getUserPreferences();
        if (!preferences) {
            preferences = {
                ThemeReading: { background: '', brightest: 0, fontSize: 0 },
                savedNews: [news],
                firstAccess: true,
                DarkMode: false,
            };
        } else {
            preferences.savedNews.push(news);
        }
        this.saveUserPreferences(preferences);
    };

    // DarkMode

    getDarkMode = (): boolean | null => {
        const preferences = this.getUserPreferences();
        return preferences ? preferences.DarkMode : null;
    };

    setDarkMode = (enabled: boolean) => {
        let preferences = this.getUserPreferences();
        if (!preferences) {
            preferences = {
                ThemeReading: { background: '', brightest: 0, fontSize: 0 },
                savedNews: [],
                firstAccess: true,
                DarkMode: enabled,
            };
        } else {
            preferences.DarkMode = enabled;
        }
        this.saveUserPreferences(preferences);
    };

    // FirstAccess

    getFirstAccess = (): boolean | null => {
        const preferences = this.getUserPreferences();
        return preferences ? preferences.firstAccess : null;
    };

    setFirstAccess = (isFirstAccess: boolean) => {
        let preferences = this.getUserPreferences();
        if (!preferences) {
            preferences = {
                ThemeReading: { background: '', brightest: 0, fontSize: 0 },
                savedNews: [],
                firstAccess: isFirstAccess,
                DarkMode: false,
            };
        } else {
            preferences.firstAccess = isFirstAccess;
        }
        this.saveUserPreferences(preferences);
    };

}

export default new StorageService();