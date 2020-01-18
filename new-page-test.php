<?php
session_start();
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <style>
        html,
        body {
            height: 100%
        }
    </style>

    <?php headimport("Page de Test"); ?>

</head>

<body id="page-top">

    <?php hheader() ?>

    <div class="col-md-9 personal-info">
    <form class="form-horizontal" role="form">
        <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
                <input class="form-control" type="text" value="Jane">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
                <input class="form-control" type="text" value="Bishop">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
                <input class="form-control" type="text" value="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
                <input class="form-control" type="text" value="janesemail@gmail.com">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
                <div class="ui-select">
                    <select id="user_time_zone" class="form-control">
                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                        <option value="Alaska">(GMT-09:00) Alaska</option>
                        <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                        <option value="Arizona">(GMT-07:00) Arizona</option>
                        <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                        <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                        <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                        <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Username:</label>
            <div class="col-md-8">
                <input class="form-control" type="text" value="janeuser">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-8">
                <input class="form-control" type="password" value="11111122333">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Confirm password:</label>
            <div class="col-md-8">
                <input class="form-control" type="password" value="11111122333">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
                <input type="button" class="btn btn-primary" value="Save Changes">
                <span></span>
                <input type="reset" class="btn btn-default" value="Cancel">
            </div>
        </div>
    </form>
</div>

  <?php /*  <div class="container h-100 o1">
        <div class="row o2" style="padding: auto">
            <div class="col-sm-12 col-md-12 md-txtc sm-undrlin md-undrlin">qqch</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-12 col-md-6 md-txtr">r 1 c 1</div>
            <div class="col-sm-12 col-md-6 md-txtr">r 1 c 2</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-12 col-md-6 md-txtr">r 2 c 1</div>
            <div class="col-sm-12 col-md-6 md-txtr">r 2 c 2</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-md-6"></div>
            <div class="col-sm-md-6"></div>
        </div>
    </div> */?>
    <?php footer(); ?>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/login.js"></script>

</body>

</html>