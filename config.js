
    const CONFIG = {
        /**
         * Choose a predefined theme:
         *
         * - "ashes-dark"
         * - "gruvbox-dark"
         * - "nord-dark"
         * - "ocean-light"
         * - "tilde-dark"
         * - "tokyo-dark"
         *
         * Alternatively, create your own in the <style> tag below!
         */
        theme: 'nathan',

        /**
         * Action to take when the clock is clicked. Options include:
         *
         * - "Help" to show the help menu
         * - "Search" to show the search input (useful on mobile)
         */
        clockOnClickAction: 'Help',

        /**
         * The delimiter between the hours, minutes and seconds on the clock.
         */
        clockDelimiter: ':',

        /**
         * Show seconds on the clock. A monospaced font is recommended for this.
         */
        clockShowSeconds: false,

        /**
         * Show AM/PM indication when CONFIG.clockTwentyFourHours is false.
         */
        clockShowAmPm: false,

        /**
         * Show a twenty-four-hour clock instead of a twelve-hour clock.
         */
        clockTwentyFourHour: false,

        /**
         * Force an IANA timezone. Useful when attempting to prevent browser
         * fingerprinting. For example, "America/Los_Angeles" would force Pacific
         * Time, "Asia/Kolkata" would force Indian Standard Time, etc. Read:
         *
         * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
         */
        clockTimeZone: undefined,

        /**
         * Type this to toggle the help menu.
         */
        helpKey: '?',

        /**
         * Instantly redirect when a key is matched. Put a space before any other
         * queries to prevent unwanted redirects.
         */
        queryInstantRedirect: false,

        /**
         * Open triggered queries in a new tab.
         */
        queryNewTab: false,

        /**
         * The delimiter between a command key and a path. For example, you'd type
         * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
         */
        queryPathDelimiter: '/',

        /**
         * The delimiter between a command key and your search query. For example,
         * to search GitHub for tilde, you'd type "g'tilde".
         */
        querySearchDelimiter: "'",

        /**g
         * Scripts allow you to open or search multiple sites at once. For example,
         * to search Google, Bing, DuckDuckGo, Ecosia and Yahoo for cats at the same
         * time, you'd type "q'cats".
         */
        scripts: {
            q: ['bin', 'yah', 'eco', 'ddg', '*'],
        },

        /**
         * The order, limit and minimum characters for each suggestion influencer.
         *
         * An "influencer" is just a suggestion source. "limit" is the max number of
         * suggestions an influencer will produce. "minChars" determines how many
         * characters need to be typed before the influencer kicks in.
         *
         * The following influencers are available:
         *
         * - "Default" suggestions come from CONFIG.suggestionDefaults (sync)
         * - "History" suggestions come from your previously entered queries (sync)
         * - "DuckDuckGo" suggestions come from the DuckDuckGo search API (async)
         *
         * To disable suggestions, remove all influencers.
         */
        suggestionInfluencers: [
            { name: 'Default', limit: 4 },
            { name: 'History', limit: 4, minChars: 2 },
            { name: 'DuckDuckGo', limit: 4, minChars: 2 },
        ],

        /**
         * Max number of suggestions that will ever be shown.
         */
        suggestionLimit: 8,

        /**
         * Default search suggestions for the specified queries.
         */
        suggestionDefaults: {
            localhost: ["0'8000", "0'8080"],
            //a: ['a/cognito/v2/idp/user-pools', 'a/dynamodbv2#item-explorer'],
            //cal: ['c/calendar/u/1/r', 'c/calendar/u/2/r'],
            //drive: ['d/drive/u/1/my-drive', 'd/drive/u/2/my-drive'],
            //g: ['g/trending', 'g/ossu', 'g/cadejscroggins/tilde', 'gist.github.com'],
            //j: ['j/popular', 'j/popular/lastweek', 'j/tags'],
            //k: ['k/u/1', 'k/u/2'],
            //m: ['m/mail/u/1', 'm/mail/u/2'],
            //o: ['o/discover/sets/new-for-you', 'o/discover/sets/weekly'],
            //p: ['p/beema.finance'],
            //r: ['r/r/startpages', 'r/r/unixporn', 'r/r/onebag', 'r/r/fujix'],
            //s: ['s/collection/tracks', 's/playlist/37i9dQZEVXcXr3r4FYT3J7'],
            //u: ['u/explore', 'u/backgrounds'],
            //youtube: ['y/feed/trending'],
        },

        /**
         * The name, key, url, search path and color for your commands. If none of
         * the specified keys are matched, the * key is used. Commands without a
         * name don't show up in the help menu.
         *
         * "hues" is an array of HSL hues that will be converted into a linear
         * gradient. CSS variables defined below, prefixed with --command-color-,
         * determine the saturation and lightness for each generated color.
         *
         * "color", if defined, will be applied to the command as-is.
         */
        commands: [
            {
                key: '*',
                search: '/search?q={}',
                url: 'https://www.google.com',
            },
            {
                key: 'ddg',
                search: '/?q={}',
                url: 'https://duckduckgo.com',
            },
            {
                hues: ['0', '0'],
                key: 'netflix',
                name: 'Netflix',
                search: '/search?q={}',
                url: 'https://www.netflix.com/browse',
            },
            {
                hues: ['200', '210'],
                key: 'cal',
                name: 'Calendar',
                search: '/calendar/u/0/r/search?q={}',
                url: 'https://calendar.google.com/calendar/u/0/r',
            },
            {
                hues: ['0', '5'],
                key: 'youtube',
                name: 'YouTube',
                search: '/results?search_query={}',
                url: 'https://youtube.com/',
            },
            {
                hues: ['355', '335'],
                key: 'wolfram',
                name: 'Wolfram',
                search: '/input/?i={}',
                url: 'https://www.wolframalpha.com',
            },
            {
                hues: ['30', '40'],
                key: 'maps',
                name: 'Google Maps',
                search: '/maps/search/{}',
                url: 'https://www.google.com/maps',
            },
            {
                // hues: ['266', '286'],
                hues: ['310', '350'],
                key: 'figma',
                name: 'Figma',
                url: 'https://www.figma.com/files/recent',
            },
            {
                hues: ['220', '290'],
                key: 'instagram',
                name: 'Instagram',
                url: 'https://www.instagram.com',
            },
            {
                hues: ['264', '244'],
                key: 'twitch',
                name: 'Twitch',
                url: 'https://www.twitch.tv/directory/following',
            },
            {
                hues: ['32', '32'],
                key: 'reddit',
                name: 'Reddit',
                search: '/search?q={}',
                url: 'https://www.reddit.com',
            },
            {
                hues: ['0', '3'],
                key: 'canvas',
                name: 'GT Canvas',
                url: 'https://gatech.instructure.com',
            },
            {
                hues: ['120', '130'],
                key: 'github',
                name: 'GitHub',
                search: '/search?q={}',
                url: 'https://github.com/nathandaven?tab=repositories',
            },
            {
                hues: ['201', '221'],
                key: 'linkedin',
                name: 'LinkedIn',
                search: '/search/results/all/?keywords={}',
                url: 'https://www.linkedin.com',
            },
            {
                hues: ['198', '218'],
                key: 'mdn',
                name: 'MDN',
                search: '/en-US/search?q={}',
                url: 'https://developer.mozilla.org/en-US',
            },
            {
                hues: ['0', '5'],
                key: 'gmail',
                name: 'Google Mail',
                search: '/mail/u/0/?q={}#search/{}',
                url: 'https://mail.google.com/mail/u/0',
            },
            {
                hues: ['203', '183'],
                key: 'twitter',
                name: 'Twitter',
                search: '/search?q={}',
                url: 'https://twitter.com/home',
            },
            {
                hues: ['40', '50'],
                key: 'drive',
                name: 'Drive',
                search: '/drive/u/0/search?q={}',
                url: 'https://drive.google.com/drive/u/0/my-drive',
            },
            {
                hues: ['124', '164'],
                key: 'spotify',
                name: 'Spotify',
                search: '/search/{}',
                url: 'https://open.spotify.com',
            },
            {
                hues: ['90'],
                key: 'hypem',
                name: 'Hypem',
                search: '/search/{}',
                url: 'https://hypem.com/latest',
            },
            {
                hues: ['45', '40'],
                key: 'keep',
                name: 'Keep',
                search: '/u/0/#search/text={}',
                url: 'https://keep.google.com/u/0',
            },
            {
                hues: ['32', '30'],
                key: 'soundcloud',
                name: 'SoundCloud',
                search: '/search?q={}',
                url: 'https://soundcloud.com/discover',
            },
            {
                hues: ['200', '210'],
                key: 'notion',
                name: 'Notion',
                url: 'https://www.notion.so',
            },
            {
                hues: ['270', '280'],
                key: 'truist',
                name: 'Truist Banking',
                url: 'https://bank.truist.com/web/home',
            },
            {
                hues: ['250', '260'],
                key: 'teams',
                name: 'Microsoft Teams',
                url: 'https://teams.microsoft.com',
            },
            {
                hues: ['200', '205'],
                key: 'gtmail',
                name: 'GT Mail',
                url: 'http://mail.gatech.edu/',
            },
            {
                hues: ['4', '24'],
                key: 'one',
                name: 'One USG',
                url: 'https://hcm-sso.onehcm.usg.edu/',
            },
            {
                key: 'localhost',
                name: 'Local Host',
                url: 'http://localhost:3000',
            },
        ].map((command) => {
            const hsla = (hue, saturation = 'var(--command-color-saturation)') =>
                `hsla(${hue}, ${saturation}, var(--command-color-lightness), 1)`;

            if (command.color || !command.name) {
                return command;
            } else if (!Array.isArray(command.hues) || !command.hues.length) {
                command.color = hsla(0, '0%');
            } else if (command.hues.length === 1) {
                command.color = hsla(command.hues[0]);
            } else {
                const c = command.hues.reduce((a, h) => `${a}, ${hsla(h)}`, '');
                command.color = `linear-gradient(135deg ${c})`;
            }

            return command;
        }),
    };



