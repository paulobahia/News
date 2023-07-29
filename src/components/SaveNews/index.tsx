import { useState, useEffect } from 'react'
import { Save2, SaveMinus } from "iconsax-react-native"
import { TouchableOpacity, View } from "react-native"
import storage from "../../services/storage"


export const SaveNews: React.FC<{ news: News }> = ({ news }) => {
    const [isSavedNews, setIsSavedNews] = useState(false)

    useEffect(() => {
        const getSavedNews = () => {
            try {
                const allNews = storage.getNews()
                const matchingNews = allNews?.find((item) => item.id === news.id);

                if (matchingNews) {
                    setIsSavedNews(true)
                }

            } catch (error) {
                console.log("Error fetching news" + error)
            }
        }

        getSavedNews();
    }, [])


    const setNews = (value: News) => {
        try {
            if (isSavedNews) {
                storage.removeNews(news.id)
                setIsSavedNews(false)
            }
            else {
                storage.saveNews(value)
                setIsSavedNews(true)
            }
        } catch (error) {
            console.log("Error saving news" + error)
        }
    }

    return (
        <View className='items-end'>
            <TouchableOpacity onPress={() => setNews(news)} className={`w-10 h-10 shadow-2xl rounded-lg shadow-black justify-center items-center flex  ${isSavedNews ? 'bg-white' : 'bg-gray-500/60'}`}>
                {
                    !isSavedNews
                        ?
                        <Save2 size="24" color="#fff" />
                        :
                        <SaveMinus size="24" color={isSavedNews ? 'black' : 'white'} variant='Bold' />
                }
            </TouchableOpacity>
        </View>
    )
}
