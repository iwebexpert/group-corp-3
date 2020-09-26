export const chatsData = () => {
    return [
        {
            id: 1, title: "AutoBot chat", messages: [
                { id: 0, text: 'Hello world!', author: 'AutoBot', timeStamp: new Date() },
                { id: 1, text: 'Hello Alice!', author: 'Magic User', timeStamp: new Date() }
            ]
        },
        {
            id: 2, title: "Чат с Алисой", messages: [

            ]
        },
        {
            id: 3, title: "Chat with Siri", messages: [

            ]
        }
    ];
}