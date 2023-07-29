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
        return preferences ? preferences.themeReading : null;
    };

    setReadingTheme = async (theme: ThemeReading) => {
        const preferences = this.getUserPreferences();

        if (preferences) {
            preferences.themeReading = theme;
            this.saveUserPreferences(preferences);
        }
        else {
            const newPreferences: UserPreferences = {
                themeReading: theme,
                savedNews: [],
                firstAccess: true,
                darkMode: false,
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
                themeReading: { background: '', brightest: 0.5, fontSize: 2 },
                savedNews: [news],
                firstAccess: true,
                darkMode: false,
            };
        } else {
            preferences.savedNews.push(news);
        }
        this.saveUserPreferences(preferences);
    };

    removeNews = (newsId: string) => {
        let preferences = this.getUserPreferences();
        
        if (preferences) {
            const savedNews = preferences.savedNews;
            const indexToRemove = savedNews.findIndex((news) => news.id === newsId);
            
            if (indexToRemove !== -1) {
                // Remove a notícia da lista pelo índice
                savedNews.splice(indexToRemove, 1);
                
                // Salva as preferências atualizadas
                this.saveUserPreferences(preferences);
            }
        }
    };

    // DarkMode

    getDarkMode = (): boolean | null => {
        const preferences = this.getUserPreferences();
        return preferences ? preferences.darkMode : null;
    };

    setDarkMode = async (enabled: boolean) => {
        let preferences = this.getUserPreferences();
        if (!preferences) {
            preferences = {
                themeReading: { background: '', brightest: 0.5, fontSize: 2 },
                savedNews: [],
                firstAccess: true,
                darkMode: enabled,
            };
        } else {
            preferences.darkMode = enabled;
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
                themeReading: { background: '', brightest: 0.5, fontSize: 2 },
                savedNews: [],
                firstAccess: isFirstAccess,
                darkMode: false,
            };
        } else {
            preferences.firstAccess = isFirstAccess;
        }
        this.saveUserPreferences(preferences);
    };

}

export default new StorageService();