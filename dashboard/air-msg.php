<?php
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <?php
  importh("Mon profil");
  ?>

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <?php
    sidebar();
    ?>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <?php topbar() ?>

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-4 text-gray-800">Commande Premium</h1>

          <div class="row">
            <div class="col-12">
              <div class="card shadow mb-4 raw">
                <div class="card-header py-3 bg-gray-300 col-12">
                  <span class="m-0 font-weight-bold text-primary">Air Message</span>
                  <div class="custom-control custom-switch float-right">
                    <input type="checkbox" class="custom-control-input" id="customSwitches">
                    <label class="custom-control-label" for="customSwitches">Activation de la commande</label>
                  </div>
                </div>
                <div class="card-body col-12">
                  <div class="row no-marg">
                    <div class="col-12 col-md-4">
                      <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-aaa-list" data-toggle="list" href="#list-aaa" role="tab" aria-controls="aaa">Commande 1</a>
                        <a class="list-group-item list-group-item-action" id="list-bbb-list" data-toggle="list" href="#list-bbb" role="tab" aria-controls="bbb">Commande 2</a>
                        <a class="list-group-item list-group-item-action" id="list-ccc-list" data-toggle="list" href="#list-ccc" role="tab" aria-controls="ccc">Commande 3</a>
                        <a class="list-group-item list-group-item-action" id="list-ddd-list" data-toggle="list" href="#list-ddd" role="tab" aria-controls="ddd">Commande 4</a>
                      </div>
                    </div>
                    <div class="sm-spacer md-hide"></div>
                    <div class="col-12 col-md-8">
                      <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-aaa" role="tabpanel" aria-labelledby="list-aaa-list">Description 1</div>
                        <div class="tab-pane fade" id="list-bbb" role="tabpanel" aria-labelledby="list-bbb-list">Description 2</div>
                        <div class="tab-pane fade" id="list-ccc" role="tabpanel" aria-labelledby="list-ccc-list">Description 3</div>
                        <div class="tab-pane fade" id="list-ddd" role="tabpanel" aria-labelledby="list-ddd-list">Description 4</div>
                      </div>
                    </div>
                    <div class="sm-spacer md-hide"></div>
                    <div class="col-12 space-10px"></div>
                    <div class="input-group input-group-default col-12 col-md-4 sm-left-rounded-input sm-no-pad">
                      <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" value="?air-msg" aria-label="pseudo" aria-describedby="inputGroup-sizing-lg">
                    </div>
                    <div class="col-12 md-hide space-10px"></div>
                    <div class="input-group input-group-default col-12 col-md-8 sm-left-rounded-input sm-no-pad">
                      <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" value="Desc" aria-label="pseudo" aria-describedby="inputGroup-sizing-lg">
                    </div>
                    <div class="col-12 space-10px"></div>
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
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
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

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

</body>

</html>