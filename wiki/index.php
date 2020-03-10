<html lang="en">

<head>
    <title>Wiki</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" href="https://discord.js.org/favicon.ico">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="discord.js_files/app.47c66d5c.css" rel="stylesheet">
    <link rel="stylesheet" href="discord.js_files/custom.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="discord.js_files/temp.js"></script>
</head>

<body cz-shortcut-listen="true"><noscript><strong>Sorry, but the discord.js website doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
    <script src="discord.js_files/custom.js"></script>
    <div id="app" class="dark">
        <header>
            <div class="container"><a href="#/" class="router-link-active">DenverBot</a>
                <nav><a href="#" class="router-link-active">Docs</a><a href="https://github.com/discordjs/discord.js">GitHub</a></nav>
            </div>
        </header>
        <div id="docs">
            <div id="docs-navbar">
                <div class="container">
                    Version :
                    <select>
                        <option value="v1">V1</option>
                        <option value="v2">V2</option>
                    </select>
                    <input type="search" placeholder="Search"><a href="#/docs/main/stable/search" class=""><em class="fa fa-search"></em></a></div>
            </div>
            <div id="docs-body">
                <div id="docs-viewer">
                    <div class="container">
                        <div id="docs-sidebar">
                            <div id="open-btn"><em class="fa fa-bars"></em></div>
                            <div id="docs-sidebar-content" class="closed">
                                <div id="close-btn"><em aria-hidden="true" class="fa fa-arrow-left"></em></div>
                                <em onclick="bright()" id="docs-brightness" title="The lights are off. Click to toggle." class="fa toggle fa-moon-o"></em>
                                <ul>
                                    <li>
                                        Dashboard
                                        <ul>
                                            <li><a href="#/docs/main/stable/general/welcome" class="">
                                                    truc1
                                                </a></li>
                                            <li><a href="#/docs/main/stable/general/updating" class="">
                                                    truc2
                                                </a></li>
                                            <li><a href="#/docs/main/stable/general/faq" class="">
                                                    truc2
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Topics
                                        <ul>
                                            <li><a href="#/docs/main/stable/topics/voice" class="">
                                                    Voice
                                                </a></li>
                                            <li><a href="#/docs/main/stable/topics/web" class="">
                                                    Web builds
                                                </a></li>
                                            <li><a href="#/docs/main/stable/topics/partials" class="">
                                                    Partials
                                                </a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        Classes
                                        <ul>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/Activity" class="">
                                                    Activity
                                                </a></li>
                                            <li class="animated-list-item visi"><a href="#/docs/main/stable/class/ActivityFlags" class="">
                                                    ActivityFlags
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/APIMessage" class="">
                                                    APIMessage
                                                </a></li>
                                            <li class="animated-list-item visi"><a href="#/docs/main/stable/class/Base" class="">
                                                    Base
                                                </a></li>
                                            <li class="animated-list-item visi"><a href="#/docs/main/stable/class/BaseClient" class="">
                                                    BaseClient
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/BaseManager" class="">
                                                    BaseManager
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/BitField" class="">
                                                    BitField
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/BroadcastDispatcher" class="">
                                                    BroadcastDispatcher
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/CategoryChannel" class="">
                                                    CategoryChannel
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/Channel" class="">
                                                    Channel
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/ChannelManager" class="">
                                                    ChannelManager
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/Client" class="router-link-exact-active router-link-active">
                                                    Client
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/ClientApplication" class="">
                                                    ClientApplication
                                                </a></li>
                                            <li class="animated-list-item"><a href="#/docs/main/stable/class/ClientPresence" class="">
                                                    ClientPresence
                                                </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="class-viewer" class="docs-page">
                            <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L32" title="Source"><em class="fa fa-code"></em></a></div>
                            <h1>Client</h1>
                            <p class="class-name-extra"><span>extends
                                    <span class="docs-type">
                                        <span class="docs-type-link"><a href="#/docs/main/stable/class/BaseClient" class="">BaseClient</a>
                                            <!----></span></span></span>
                                <!---->
                            </p>
                            <!---->
                            <!---->
                            <!---->
                            <p class="class-desc">
                                <p>The main hub for interacting with the Discord API, and the starting point for any bot.</p>
                            </p>
                            <!---->
                            <div id="class-constructor">
                                <h2>Constructor</h2>
                                <pre><code class="js hljs javascript"><span class="hljs-keyword">new</span> Discord.Client(<span class="constructor-param">options</span>);</code></pre>
                                <div class="param-table-wrapper">
                                    <table class="param-table">
                                        <thead>
                                            <tr>
                                                <th>Parameter</th>
                                                <th>Type</th>
                                                <th>Optional</th>
                                                <th>Default</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>options</td>
                                                <td><span class="docs-type">
                                                        <span class="docs-type-link"><a href="#/docs/main/stable/typedef/ClientOptions" class="">ClientOptions</a>
                                                            <!----></span></span></td>
                                                <td><em class="fa fa-check"></em></td>
                                                <td><em>none</em></td>
                                                <td>
                                                    <p>Options for the client</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="class-overview">
                                <div class="col">
                                    <div class="title">Properties</div>
                                    <ul>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=channels" class="">
                                                channels
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=emojis" class="">
                                                emojis
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=guilds" class="">
                                                guilds
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=options" class="">
                                                options
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=readyAt" class="">
                                                readyAt
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=readyTimestamp" class="">
                                                readyTimestamp
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=shard" class="">
                                                shard
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=token" class="">
                                                token
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=uptime" class="">
                                                uptime
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=user" class="">
                                                user
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=users" class="">
                                                users
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=voice" class="">
                                                voice
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=ws" class="">
                                                ws
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <div class="title">Methods</div>
                                    <ul>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=clearImmediate" class="">
                                                clearImmediate
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=clearInterval" class="">
                                                clearInterval
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=clearTimeout" class="">
                                                clearTimeout
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=destroy" class="">
                                                destroy
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=fetchApplication" class="">
                                                fetchApplication
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=fetchInvite" class="">
                                                fetchInvite
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=fetchVoiceRegions" class="">
                                                fetchVoiceRegions
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=fetchWebhook" class="">
                                                fetchWebhook
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=generateInvite" class="">
                                                generateInvite
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=login" class="">
                                                login
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=setImmediate" class="">
                                                setImmediate
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=setInterval" class="">
                                                setInterval
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=setTimeout" class="">
                                                setTimeout
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                        <li class="animated-list-item"><a href="#/docs/main/stable/class/Client?scrollTo=sweepMessages" class="">
                                                sweepMessages
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></a></li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <div class="title">Events</div>
                                    <ul>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-channelCreate" class="">
                                                channelCreate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-channelDelete" class="">
                                                channelDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-channelPinsUpdate" class="">
                                                channelPinsUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-channelUpdate" class="">
                                                channelUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-debug" class="">
                                                debug
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiCreate" class="">
                                                emojiCreate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiDelete" class="">
                                                emojiDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate" class="">
                                                emojiUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-error" class="">
                                                error
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd" class="">
                                                guildBanAdd
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove" class="">
                                                guildBanRemove
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildCreate" class="">
                                                guildCreate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildDelete" class="">
                                                guildDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildIntegrationsUpdate" class="">
                                                guildIntegrationsUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd" class="">
                                                guildMemberAdd
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove" class="">
                                                guildMemberRemove
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk" class="">
                                                guildMembersChunk
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberSpeaking" class="">
                                                guildMemberSpeaking
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberUpdate" class="">
                                                guildMemberUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable" class="">
                                                guildUnavailable
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-guildUpdate" class="">
                                                guildUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-invalidated" class="">
                                                invalidated
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-inviteCreate" class="">
                                                inviteCreate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-inviteDelete" class="">
                                                inviteDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-message" class="">
                                                message
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageDelete" class="">
                                                messageDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk" class="">
                                                messageDeleteBulk
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionAdd" class="">
                                                messageReactionAdd
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemove" class="">
                                                messageReactionRemove
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveAll" class="">
                                                messageReactionRemoveAll
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveEmoji" class="">
                                                messageReactionRemoveEmoji
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-messageUpdate" class="">
                                                messageUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-presenceUpdate" class="">
                                                presenceUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-rateLimit" class="">
                                                rateLimit
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-ready" class="">
                                                ready
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-roleCreate" class="">
                                                roleCreate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-roleDelete" class="">
                                                roleDelete
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-roleUpdate" class="">
                                                roleUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-shardDisconnect" class="">
                                                shardDisconnect
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-shardError" class="">
                                                shardError
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-shardReady" class="">
                                                shardReady
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-shardReconnecting" class="">
                                                shardReconnecting
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-shardResume" class="">
                                                shardResume
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-typingStart" class="">
                                                typingStart
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-userUpdate" class="">
                                                userUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate" class="">
                                                voiceStateUpdate
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-warn" class="">
                                                warn
                                                <!----></a></li>
                                        <li><a href="#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate" class="">
                                                webhookUpdate
                                                <!----></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>Properties</h2>
                            <div id="doc-for-channels" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L124" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=channels" class="">.channels</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>All of the <a href="#/docs/main/stable/class/Channel">Channel</a>s that the client is currently handling, mapped by their IDs -
                                            as long as sharding isn't being used, this will be <em>every</em> channel in <em>every</em> guild the bot
                                            is a member of. Note that DM channels will not be initially cached, and thus not be present
                                            in the Manager without their explicit fetching or use.</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/ChannelManager" class="">ChannelManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-emojis" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L169" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=emojis" class="">.emojis</a></h3>
                                <!----><span title="This property cannot be modified." class="badge">Read-only</span>
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>All custom emojis that the client has access to, mapped by their IDs</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildEmojiManager" class="">GuildEmojiManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-guilds" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L115" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=guilds" class="">.guilds</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>All of the guilds the client is currently handling, mapped by their IDs -
                                            as long as sharding isn't being used, this will be <em>every</em> guild the bot is a member of</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildManager" class="">GuildManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-options" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L42" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=options" class="">.options</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>The options the client was instantiated with</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/typedef/ClientOptions" class="">ClientOptions</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-readyAt" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L157" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=readyAt" class="">.readyAt</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Time at which the client was last regarded as being in the <code>READY</code> state
                                            (each time the client disconnects and successfully reconnects, this will be overwritten)</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-readyTimestamp" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L182" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=readyTimestamp" class="">.readyTimestamp</a></h3>
                                <!----><span title="This property cannot be modified." class="badge">Read-only</span>
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Timestamp of the time the client was last <code>READY</code> at</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-shard" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L99" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=shard" class="">.shard</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Shard helpers for the client (only if the process was spawned from a <a href="#/docs/main/stable/class/ShardingManager">ShardingManager</a>)</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="#/docs/main/stable/class/ShardClientUtil" class="">ShardClientUtil</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-token" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L141" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=token" class="">.token</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Authorization token for the logged in bot
                                        </p>
                                        <div class="warn">This should be kept private at all times.</div>
                                        <p></p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-uptime" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L191" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=uptime" class="">.uptime</a></h3>
                                <!----><span title="This property cannot be modified." class="badge">Read-only</span>
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>How long it has been since the client last entered the <code>READY</code> state in milliseconds</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-user" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L150" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=user" class="">.user</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>User that the client is logged in as</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="#/docs/main/stable/class/ClientUser" class="">ClientUser</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-users" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L108" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=users" class="">.users</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>All of the <a href="#/docs/main/stable/class/User">User</a> objects that have been cached at any point, mapped by their IDs</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/UserManager" class="">UserManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-voice" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L93" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=voice" class="">.voice</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>The voice manager of the client (<code>null</code> in browsers)</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            ?<span class="docs-type-link"><a href="#/docs/main/stable/class/ClientVoiceManager" class="">ClientVoiceManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-ws" class="class-prop class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L80" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=ws" class="">.ws</a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>The WebSocket manager of the client</p>
                                    </p>
                                    <!---->
                                    <div class="prop-type">
                                        Type:
                                        <span class="docs-type">
                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/WebSocketManager" class="">WebSocketManager</a>
                                                <!----></span></span></div>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <h2>Methods</h2>
                            <div id="doc-for-clearImmediate" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L137" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=clearImmediate" class="">
                                        .clearImmediate(<span class="method-param">immediate</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Clears an immediate.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>immediate</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><span>Immediate</span>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Immediate to cancel</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span class="docs-type-link docs-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">void</a>
                                            <!----></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-clearInterval" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L116" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=clearInterval" class="">
                                        .clearInterval(<span class="method-param">interval</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Clears an interval.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>interval</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout">Timeout</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Interval to cancel</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span class="docs-type-link docs-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">void</a>
                                            <!----></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-clearTimeout" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L94" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=clearTimeout" class="">
                                        .clearTimeout(<span class="method-param">timeout</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Clears a timeout.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>timeout</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout">Timeout</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Timeout to cancel</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span class="docs-type-link docs-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">void</a>
                                            <!----></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-destroy" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L232" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=destroy" class="">
                                        .destroy()
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Logs out, terminates the connection to Discord, and destroys the client.</p>
                                    </p>
                                    <!---->
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">void</a>
                                                    <!----></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-fetchApplication" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L334" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=fetchApplication" class="">
                                        .fetchApplication()
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Obtains the OAuth Application of this bot from Discord.</p>
                                    </p>
                                    <!---->
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/ClientApplication" class="">ClientApplication</a><span>&gt;</span></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-fetchInvite" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L247" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=fetchInvite" class="">
                                        .fetchInvite(<span class="method-param">invite</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Obtains an invite from Discord.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>invite</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/typedef/InviteResolvable" class="">InviteResolvable</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Invite code or URL</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/Invite" class="">Invite</a><span>&gt;</span></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs">client.fetchInvite(<span class="hljs-string">'https://discord.gg/bRCvFy9'</span>).then(<span class="hljs-function"><span class="hljs-params">invite</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Obtained invite with code: <span class="hljs-subst">${invite.code}</span>`</span>)).catch(<span class="hljs-built_in">console</span>.error);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-fetchVoiceRegions" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L280" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=fetchVoiceRegions" class="">
                                        .fetchVoiceRegions()
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Obtains the available voice regions from Discord.</p>
                                    </p>
                                    <!---->
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="https://discord.js.org/#/docs/collection/master/class/Collection">Collection</a><span>&lt;</span></span><span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a><span>, </span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/VoiceRegion" class="">VoiceRegion</a><span>&gt;&gt;</span></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs">client.fetchVoiceRegions()
  .then(<span class="hljs-function"><span class="hljs-params">regions</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Available regions are: <span class="hljs-subst">${regions.map(region =&gt; region.name).join(<span class="hljs-string">', '</span>)}</span>`</span>))
  .catch(<span class="hljs-built_in">console</span>.error);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-fetchWebhook" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L265" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=fetchWebhook" class="">
                                        .fetchWebhook(<span class="method-param">id</span><span class="method-param optional">token</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Obtains a webhook from Discord.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <th>Optional</th>
                                                    <th>Default</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>id</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/typedef/Snowflake" class="">Snowflake</a>
                                                                <!----></span></span></td>
                                                    <td>
                                                        <!---->
                                                    </td>
                                                    <td><span></span></td>
                                                    <td>
                                                        <p>ID of the webhook</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>token</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <td><em class="fa fa-check"></em></td>
                                                    <td><em>none</em></td>
                                                    <td>
                                                        <p>Token for the webhook</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/Webhook" class="">Webhook</a><span>&gt;</span></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs">client.fetchWebhook(<span class="hljs-string">'id'</span>, <span class="hljs-string">'token'</span>)
  .then(<span class="hljs-function"><span class="hljs-params">webhook</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Obtained webhook with name: <span class="hljs-subst">${webhook.name}</span>`</span>))
  .catch(<span class="hljs-built_in">console</span>.error);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-generateInvite" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L350" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=generateInvite" class="">
                                        .generateInvite(<span class="method-param optional">permissions</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Generates a link that can be used to invite the bot to a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <th>Optional</th>
                                                    <th>Default</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>permissions</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/typedef/PermissionResolvable" class="">PermissionResolvable</a>
                                                                <!----></span></span></td>
                                                    <td><em class="fa fa-check"></em></td>
                                                    <td><em>none</em></td>
                                                    <td>
                                                        <p>Permissions to request</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a><span>&gt;</span></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs">client.generateInvite([<span class="hljs-string">'SEND_MESSAGES'</span>, <span class="hljs-string">'MANAGE_GUILD'</span>, <span class="hljs-string">'MENTION_EVERYONE'</span>])
  .then(<span class="hljs-function"><span class="hljs-params">link</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Generated bot invite link: <span class="hljs-subst">${link}</span>`</span>))
  .catch(<span class="hljs-built_in">console</span>.error);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-login" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L202" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=login" class="">
                                        .login(<span class="method-param">token</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Logs the client in, establishing a websocket connection to Discord.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>token</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Token of the account to log in with</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a><span>&lt;</span></span><span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a><span>&gt;</span></span></span></span>
                                        <p>
                                            <p>Token of the account used</p>
                                        </p>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs">client.login(<span class="hljs-string">'my token'</span>);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-setImmediate" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L127" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=setImmediate" class="">
                                        .setImmediate(<span class="method-param">fn</span><span class="method-param">...args</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Sets an immediate that will be automatically cancelled if the client is destroyed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>fn</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Function to execute</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>args</td>
                                                    <td><span class="docs-type">
                                                            ...<span class="docs-type-link"><span title="Any type">*</span>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Arguments for the function</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><span>Immediate</span>
                                                    <!----></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-setInterval" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L106" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=setInterval" class="">
                                        .setInterval(<span class="method-param">fn</span><span class="method-param">delay</span><span class="method-param">...args</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Sets an interval that will be automatically cancelled if the client is destroyed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>fn</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Function to execute</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>delay</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Time to wait between executions (in milliseconds)</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>args</td>
                                                    <td><span class="docs-type">
                                                            ...<span class="docs-type-link"><span title="Any type">*</span>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Arguments for the function</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout">Timeout</a>
                                                    <!----></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-setTimeout" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/BaseClient.js#L81" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=setTimeout" class="">
                                        .setTimeout(<span class="method-param">fn</span><span class="method-param">delay</span><span class="method-param">...args</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Sets a timeout that will be automatically cancelled if the client is destroyed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>fn</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Function to execute</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>delay</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Time to wait before executing (in milliseconds)</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>args</td>
                                                    <td><span class="docs-type">
                                                            ...<span class="docs-type-link"><span title="Any type">*</span>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Arguments for the function</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout">Timeout</a>
                                                    <!----></span></span></span>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-sweepMessages" class="class-method class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L300" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=sweepMessages" class="">
                                        .sweepMessages(<span class="method-param optional">lifetime</span>)
                                    </a></h3>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Sweeps all text-based channels' messages and removes the ones older than the max message lifetime.
                                            If the message has been edited, the time of the edit is used rather than the time of the original message.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <th>Optional</th>
                                                    <th>Default</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>lifetime</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <td><em class="fa fa-check"></em></td>
                                                    <td><span><code>this.options.messageCacheLifetime</code></span></td>
                                                    <td>
                                                        <p>Messages that are older than this (in seconds)
                                                            will be removed from the caches. The default is based on <a href="#/docs/main/stable/typedef/ClientOptions?scrollTo=messageCacheLifetime">ClientOptions#messageCacheLifetime</a></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="method-return">
                                        Returns:
                                        <span><span class="docs-type">
                                                <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                    <!----></span></span></span>
                                        <p>
                                            <p>Amount of messages that were removed from the caches,
                                                or -1 if the message cache lifetime is unlimited</p>
                                        </p>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div class="method-examples">
                                        Examples:
                                        <pre><code class="javascript hljs"><span class="hljs-comment">// Remove all messages older than 1800 seconds from the messages cache</span>
<span class="hljs-keyword">const</span> amount = client.sweepMessages(<span class="hljs-number">1800</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Successfully removed <span class="hljs-subst">${amount}</span> messages from the cache.`</span>);</code></pre>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <h2>Events</h2>
                            <div id="doc-for-e-channelCreate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/ChannelCreate.js#L12" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-channelCreate" class="">channelCreate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a channel is created.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>channel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/DMChannel" class="">DMChannel</a>
                                                                <!----></span></span><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildChannel" class="">GuildChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel that was created</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-channelDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/ChannelDelete.js#L25" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-channelDelete" class="">channelDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a channel is deleted.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>channel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/DMChannel" class="">DMChannel</a>
                                                                <!----></span></span><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildChannel" class="">GuildChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel that was deleted</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-channelPinsUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js#L13" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-channelPinsUpdate" class="">channelPinsUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event,
                                            not much information can be provided easily here - you need to manually check the pins yourself.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>channel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/DMChannel" class="">DMChannel</a>
                                                                <!----></span></span><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/TextChannel" class="">TextChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel that the pins update occurred in</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>time</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The time of the pins update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-channelUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/CHANNEL_UPDATE.js#L8" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-channelUpdate" class="">channelUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldChannel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/DMChannel" class="">DMChannel</a>
                                                                <!----></span></span><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildChannel" class="">GuildChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newChannel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/DMChannel" class="">DMChannel</a>
                                                                <!----></span></span><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildChannel" class="">GuildChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-debug" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L436" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-debug" class="">debug</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted for general debugging information.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>info</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The debug information</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-emojiCreate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildEmojiCreate.js#L9" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiCreate" class="">emojiCreate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a custom emoji is created in a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>emoji</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildEmoji" class="">GuildEmoji</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The emoji that was created</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-emojiDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildEmojiDelete.js#L10" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiDelete" class="">emojiDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a custom emoji is deleted in a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>emoji</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildEmoji" class="">GuildEmoji</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The emoji that was deleted</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-emojiUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildEmojiUpdate.js#L9" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate" class="">emojiUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a custom emoji is updated in a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldEmoji</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildEmoji" class="">GuildEmoji</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The old emoji</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newEmoji</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildEmoji" class="">GuildEmoji</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The new emoji</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-error" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/sharding/ShardClientUtil.js#L200" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-error" class="">error</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when the client encounters an error.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>error</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The error encountered</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildBanAdd" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/GUILD_BAN_ADD.js#L9" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd" class="">guildBanAdd</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a member is banned from a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild that the ban occurred in</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>user</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user that was banned</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildBanRemove" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildBanRemove.js#L11" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove" class="">guildBanRemove</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a member is unbanned from a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild that the unban occurred in</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>user</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user that was unbanned</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildCreate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/GUILD_CREATE.js#L23" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildCreate" class="">guildCreate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever the client joins a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The created guild</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildDelete.js#L46" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildDelete" class="">guildDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild kicks the client or the guild is deleted/left.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild that was deleted</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildIntegrationsUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildIntegrationsUpdate.js#L10" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildIntegrationsUpdate" class="">guildIntegrationsUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild integration is updated</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild whose integrations were updated</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildMemberAdd" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/GUILD_MEMBER_ADD.js#L11" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd" class="">guildMemberAdd</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a user joins a guild.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>member</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The member that has joined a guild</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildMemberRemove" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildMemberRemove.js#L17" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove" class="">guildMemberRemove</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a member leaves a guild, or is kicked.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>member</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The member that has left/been kicked from the guild</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildMembersChunk" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js#L15" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk" class="">guildMembersChunk</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a chunk of guild members is received (all members come from the same guild).</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>members</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://discord.js.org/#/docs/collection/master/class/Collection">Collection</a><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/typedef/Snowflake" class="">Snowflake</a><span>, </span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a><span>&gt;</span></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The members in the chunk</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild related to the member chunk</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildMemberSpeaking" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/voice/VoiceConnection.js#L507" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberSpeaking" class="">guildMemberSpeaking</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted once a guild member changes speaking state.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>member</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The member that started/stopped speaking</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>speaking</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><span>Readonly</span><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/Speaking" class="">Speaking</a><span>&gt;</span></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The speaking state of the member</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildMemberUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js#L12" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildMemberUpdate" class="">guildMemberUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild member changes - i.e. new role, removed role, nickname.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldMember</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The member before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newMember</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/GuildMember" class="">GuildMember</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The member after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildUnavailable" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildDelete.js#L25" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable" class="">guildUnavailable</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild becomes unavailable, likely due to a server outage.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>guild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild that has become unavailable</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-guildUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildUpdate.js#L13" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-guildUpdate" class="">guildUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild is updated - e.g. name change.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldGuild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newGuild</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Guild" class="">Guild</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The guild after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-invalidated" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketManager.js#L302" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-invalidated" class="">invalidated</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when the client's session becomes invalidated.
                                            You are expected to handle closing the process gracefully and preventing a boot loop
                                            if you are listening to this event.</p>
                                    </p>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-inviteCreate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/InviteCreate.js#L16" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-inviteCreate" class="">inviteCreate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when an invite is created.
                                        </p>
                                        <div class="info"> This event only triggers if the client has <code>MANAGE_GUILD</code> permissions for the guild,
                                            or <code>MANAGE_CHANNEL</code> permissions for the channel.</div>
                                        <p></p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>invite</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Invite" class="">Invite</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The invite that was created</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-inviteDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/InviteDelete.js#L17" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-inviteDelete" class="">inviteDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when an invite is deleted.
                                        </p>
                                        <div class="info"> This event only triggers if the client has <code>MANAGE_GUILD</code> permissions for the guild,
                                            or <code>MANAGE_CHANNEL</code> permissions for the channel.</div>
                                        <p></p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>invite</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Invite" class="">Invite</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The invite that was deleted</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-message" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageCreate.js#L26" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-message" class="">message</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a message is created.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>message</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The created message</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageDelete.js#L16" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageDelete" class="">messageDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a message is deleted.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>message</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The deleted message</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageDeleteBulk" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageDeleteBulk.js#L31" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk" class="">messageDeleteBulk</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever messages are deleted in bulk.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>messages</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://discord.js.org/#/docs/collection/master/class/Collection">Collection</a><span>&lt;</span></span><span class="docs-type-link"><a href="#/docs/main/stable/typedef/Snowflake" class="">Snowflake</a><span>, </span></span><span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a><span>&gt;</span></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The deleted messages, mapped by their ID</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageReactionAdd" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageReactionAdd.js#L38" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionAdd" class="">messageReactionAdd</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a reaction is added to a cached message.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>messageReaction</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/MessageReaction" class="">MessageReaction</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The reaction object</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>user</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user that applied the guild or reaction emoji</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageReactionRemove" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageReactionRemove.js#L32" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemove" class="">messageReactionRemove</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a reaction is removed from a cached message.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>messageReaction</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/MessageReaction" class="">MessageReaction</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The reaction object</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>user</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user whose emoji or reaction emoji was removed</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageReactionRemoveAll" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageReactionRemoveAll.js#L23" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveAll" class="">messageReactionRemoveAll</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever all reactions are removed from a cached message.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>message</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The message the reactions were removed from</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageReactionRemoveEmoji" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/MessageReactionRemoveEmoji.js#L18" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveEmoji" class="">messageReactionRemoveEmoji</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when a bot removes an emoji reaction from a cached message.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>reaction</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/MessageReaction" class="">MessageReaction</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The reaction that was removed</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-messageUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/MESSAGE_UPDATE.js#L8" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-messageUpdate" class="">messageUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a message is updated - e.g. embed or content change.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldMessage</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The message before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newMessage</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Message" class="">Message</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The message after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-presenceUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/PresenceUpdate.js#L33" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-presenceUpdate" class="">presenceUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild member's presence (e.g. status, activity) is changed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldPresence</td>
                                                    <td><span class="docs-type">
                                                            ?<span class="docs-type-link"><a href="#/docs/main/stable/class/Presence" class="">Presence</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The presence before the update, if one at all</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newPresence</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Presence" class="">Presence</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The presence after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-rateLimit" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/rest/RequestHandler.js#L73" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-rateLimit" class="">rateLimit</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when the client hits a rate limit while making a request</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>rateLimitInfo</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Object containing the rate limit info</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>rateLimitInfo.timeout</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Timeout in ms</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>rateLimitInfo.limit</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Number of requests that can be made to this endpoint</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>rateLimitInfo.method</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>HTTP method used for request that triggered this event</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>rateLimitInfo.path</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Path used for request that triggered this event</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>rateLimitInfo.route</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Route used for request that triggered this event</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-ready" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketManager.js#L429" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-ready" class="">ready</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when the client becomes ready to start working.</p>
                                    </p>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-roleCreate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildRoleCreate.js#L14" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-roleCreate" class="">roleCreate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a role is created.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>role</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Role" class="">Role</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The role that was created</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-roleDelete" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildRoleDelete.js#L17" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-roleDelete" class="">roleDelete</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild role is deleted.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>role</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Role" class="">Role</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The role that was deleted</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-roleUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/GuildRoleUpdate.js#L17" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-roleUpdate" class="">roleUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild role is updated.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldRole</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Role" class="">Role</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The role before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newRole</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Role" class="">Role</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The role after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-shardDisconnect" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketManager.js#L204" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-shardDisconnect" class="">shardDisconnect</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when a shard's WebSocket disconnects and will no longer reconnect.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>event</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent">CloseEvent</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The WebSocket close event</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>id</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The shard ID that disconnected</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-shardError" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketShard.js#L305" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-shardError" class="">shardError</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a shard's WebSocket encounters a connection error.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>error</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The encountered error</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>shardID</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The shard that encountered this error</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-shardReady" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketManager.js#L190" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-shardReady" class="">shardReady</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when a shard turns ready.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>id</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The shard ID that turned ready</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>unavailableGuilds</td>
                                                    <td><span class="docs-type">
                                                            ?<span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a><span>&lt;</span></span><span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a><span>&gt;</span></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>Set of unavailable guild IDs, if any</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-shardReconnecting" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/WebSocketManager.js#L220" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-shardReconnecting" class="">shardReconnecting</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when a shard is attempting to reconnect or re-identify.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>id</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The shard ID that is attempting to reconnect</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-shardResume" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/RESUMED.js#L7" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-shardResume" class="">shardResume</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted when a shard resumes successfully.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>id</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The shard ID that resumed</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>replayedEvents</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The amount of replayed events</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-typingStart" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/websocket/handlers/TYPING_START.js#L10" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-typingStart" class="">typingStart</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a user starts typing in a channel.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>channel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/Channel" class="">Channel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel the user started typing in</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>user</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user that started typing</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-userUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/UserUpdate.js#L14" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-userUpdate" class="">userUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a user's details (e.g. username) are changed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldUser</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newUser</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/User" class="">User</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The user after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-voiceStateUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/VoiceStateUpdate.js#L33" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate" class="">voiceStateUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>oldState</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/VoiceState" class="">VoiceState</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The voice state before the update</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>newState</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/VoiceState" class="">VoiceState</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The voice state after the update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-warn" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L430" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-warn" class="">warn</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted for general warnings.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>info</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The warning</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div id="doc-for-e-webhookUpdate" class="class-event class-item">
                                <div class="source-button"><a href="https://github.com/discordjs/discord.js/blob/stable/src/client/actions/WebhooksUpdate.js#L10" title="Source"><em class="fa fa-code"></em></a></div>
                                <h3><a href="#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate" class="">webhookUpdate</a></h3>
                                <!---->
                                <div class="class-item-details">
                                    <p>
                                        <p>Emitted whenever a guild text channel has its webhooks changed.</p>
                                    </p>
                                    <div class="param-table-wrapper">
                                        <table class="param-table">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <!---->
                                                    <!---->
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>channel</td>
                                                    <td><span class="docs-type">
                                                            <span class="docs-type-link"><a href="#/docs/main/stable/class/TextChannel" class="">TextChannel</a>
                                                                <!----></span></span></td>
                                                    <!---->
                                                    <!---->
                                                    <td>
                                                        <p>The channel that had a webhook update</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="docs-meta">
                        <p>
                            Documentation built at Sun, 08 Mar 2020 19:07:56 GMT.<br>
                            Generator: v0.9.0 &nbsp; Format: 20
                        </p>
                    </div>
                    <div id="scroll-top" title="Scroll to top" style="display: block; opacity: 1;"><em class="fa fa-arrow-up"></em></div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container"><strong><a href="#/" class="router-link-active">discord.js</a></strong>
                <p>A powerful library for interacting with the Discord API</p>
                <ul class="stats">
                    <li>4 978 942 downloads</li>
                    <li>5 184 stars</li>
                    <li>100 contributors</li>
                </ul><a href="" id="dark-mode-link"><em class="fa fa-sun-o"></em>
                    Turn on the lights
                </a>
            </div>
            <div id="site-meta">
                <div id="site-meta-label">π</div>
                commit: a70c1bb03ecc0d07767543fa5731cd6ec8d0861b<br>
                built at: Sun, 01 Mar 2020 14:54:03 GMT
            </div>
        </footer>
    </div>
    <script>
        if ('serviceWorker' in navigator) {
            try {
                navigator.serviceWorker.register('/sw.js');
            } catch (e) {
                console.error('Error registering service worker', e);
            }
        }
    </script>
    <script src="/js/chunk-vendors.56927b5f.js"></script>
    <script src="/js/app.712d6e63.js"></script>
</body>

</html>