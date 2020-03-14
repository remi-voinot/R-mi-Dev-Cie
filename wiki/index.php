<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/out.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../vendor/fontawesome-free/css/all.css">
    <script src="js/out.js"></script>
</head>

<body>
    <div class="bg-gray-222 part-topbar">
        <div class="l-h-3 container">
            <a href="#" class="part-topbar-title a-title">Wiki</a>
            <a href="../" class="part-topbar-title float-right">Accueil</a>
            <a href="../dashboard/" class="part-topbar-title float-right">Dashboard</a>
        </div>
    </div>
    <div class="bg-gray-333">
        <div class="container part-searchbar color-gray-AAA fa-0-9x">
            <span>Selected version : </span>
            <select name="" id="" class="select">
                <option value="" selected>current</option>
            </select>
            <span class="sm-hide xxs-hide"> Current : 0.0.1-beta</span>
            <img src="https://img.shields.io/static/v1?label=current&message=0.0.1&color=success"
                class="marg-left-0-5em xs-hide">
            <img src="https://img.shields.io/static/v1?label=new beta&message=0.0.2&color=ea9914"
                class="marg-left-0-5em hide md-show">
            <img src="https://img.shields.io/static/v1?label=deprecated&message=0.0.0&color=critical"
                class="marg-left-0-5em hide lg-show">
            <img src="https://img.shields.io/static/v1?label=api&message=disabled&color=inactive"
                class="marg-left-0-5em hide lg-show">
            <input type="text" class="input float-sm-right ml-auto" placeholder="Search">
        </div>
    </div>
    <div class="part-mainsite main-row container pad-min-md-top-0">
        <div class="col-12 col-md-10 part-docs no-h content-main">
            <!--END MAIN CONTENT-->
            <div onclick="location.href='#menu';" class="a-div part-menulink text-center md-hide pointer"
                style="cursor:pointer">
                <i class="fas fa-chevron-circle-right"></i>
                <span onclick="location.href='#menu';" href="#menu" class="font-1-2">Vers le menu !</span>
            </div>
            <div class="title">
                <span class="h1 global">MyClass</span>
                <span class="text">extends</span>
                <a href="#" class="text">Variable</a>
            </div>

            <div class="description">
                <span>The main hub for interacting with the Discord API, and the starting point for any bot.</span>
            </div>

            <span class="h2">Truc</span>

            <span class="pre">Function</span>

            <table class="table tablers table-responsive">
                <thead>
                    <tr class="tr-th">
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
                        <td>
                            <span class=""><a href="#/docs/main/stable/typedef/ClientOptions"
                                    class="">ClientOptions</a></span></td>
                        <td><em class="fa fa-check"></em></td>
                        <td><em>none</em></td>
                        <td>
                            <span>Options for the client</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="col-12 menu-div">
                <div class="row menu">
                    <div class="col-12 col-md-6">
                        <div class="ul">Titre</div>
                        <a class="li" href="#abc">Text</a>
                        <a class="li" href="#">Text</a>
                    </div>
                    <div class="col-12 col-md-6 min-sm-marg-top-0-5em">
                        <div class="ul">Titre</div>
                        <a class="li" href="#">Text</a>
                        <a class="li" href="#">Text</a>
                    </div>
                </div>
            </div>
            <span class="h2 pad-top-30">Section</span>

            <div class="contentext">
                <div class="titles">
                    <a class="titre">.abc(<span class="param">text</span>)</a>
                    <span class="tag cursor">READ-ONLY</span>
                    <span class="tagerr cursor">DEPRECATED</span>
                </div>

                <div class="c-in">
                    <div>Lorem ipsum dolor, <a href="">gzidkfgb</a> amet <code>consectetur</code> adipisicing
                        <code>READY</code>. Hic quibusdam
                        ipsa voluptatum quis. Nulla autem sequi vel asperiores, delectus libero tenetur, officiis
                        reiciendis laudantium itaque, quasi ratione qui nisi recusandae.</div>
                    <div class="mr-auto">
                        <div class="warns warns-m">Truc.</div>
                    </div>
                    <div class="mr-auto">
                        <div class="infos infos-m">Truc.</div>
                    </div>
                    <div class="type">Type: <a href="">Hexa</a></div>
                </div>
            </div>


            <!--END MAIN CONTENT-->
        </div>
        <div id="menu" class="col-12 col-md-2 order-md-first part-sidebar hidden-md-down">
            <i class="ico fa fa-moon-o" onclick="hid()"></i>
            <div class="text-center md-hide ul-men">MENU</div>
            <div class="ul">Type</div>
            <a class="li" href="#/a">A1</a>
            <a class="li li-selected" href="#/b">B2</a>
            <a class="li" href="#/b">C3</a>
            <a class="li li-hid li-hidden" href="#/b">D4</a>
            <a class="li" href="#/b">E5</a>
        </div>

    </div>
    <div class="part-footers bg-gray-333 color-gray-AAA">
        <a href="">discord.js</a>
        <p class="p-marg-top">A powerful library for interacting with the Discord API</p>
        <p class="">4 978 942 downloads 5 184 stars 100 contributors</p>

        <a href="../" class="button"><i class="glyphicon gly"></i> Accueil de Dev'&'Cie</a>

    </div>

    <div class="part-loading">text</div>
    <script src="./ids.js"></script>
</body>

</html>