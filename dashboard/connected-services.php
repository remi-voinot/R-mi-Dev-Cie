<?php
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  importh("Services connectés");
  ?>
</head>

<body id="page-top">
  <div id="wrapper">
    <?php
    sidebar();
    ?>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <?php topbar() ?>
        <div class="container-fluid">
          <h1 class="h3 mb-4 text-gray-800">Services connectés</h1>
          <div class="row">
            <div class="col-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-gray-300">
                  <h6 class="m-0 font-weight-bold text-primary">Services personnels</h6>
                </div>
                <div class="card-body">
                  <div class="row no-marg">
                    <div class="col-12">
                      <table class="table table-borderless no-marg">
                        <tbody>
                          <tr>
                            <td class="w-25pp"><img src="/dashboard/img/d-dev.png" class="img-fluid"></td>
                            <th class="v-a-c">Discord Developers API</th>
                            <td class="v-a-c">Description</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-gray-300">
                  <h6 class="m-0 font-weight-bold text-primary">Services bots / Discord</h6>
                </div>
                <div class="card-body">
                  <div class="row no-marg">
                    <div class="col-12">
                      <table class="table table-borderless no-marg">
                        <tbody>
                          <tr>
                            <td class="w-25pp"><img src="/dashboard/img/g-ads.png" class="img-fluid"></td>
                            <th class="v-a-c">Discord Developers API</th>
                            <td class="v-a-c">Description</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-gray-300">
                  <h6 class="m-0 font-weight-bold text-primary">Services bots / Discord</h6>
                </div>
                <div class="card-body">
                  <div class="row no-marg">
                    <div class="col-12">
                      <table class="table table-borderless no-marg">
                        <tbody>
                          <tr>
                            <td class="w-25pp"><img src="/dashboard/img/d-api.png" class="img-fluid"></td>
                            <th class="v-a-c">Discord Developers API</th>
                            <td class="v-a-c">Description</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php footer() ?>
    </div>
  </div>
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/sb-admin-2.min.js"></script>
</body>
</html>