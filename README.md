### A simple twitch chatbot made with typescript + nodejs


Create a file: src/cfg/bot.ts

With this content:
```
export const login = { 
    identity: {
        username: '',
        password: 'oauth:'
    },
    channels: [
        ''
    ]
}

export const prefix = '!'
```

And change the info to your user info (username, password and channels. If you wish, change your prefix too
