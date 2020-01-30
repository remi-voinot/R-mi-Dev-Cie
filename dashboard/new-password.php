<?php
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <?php
  importh("Modifier mon mot de passe");
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
          <h1 class="h3 mb-4 text-gray-800">Mot de passe</h1>

          <div class="row">

            <div class="col-12">

              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-gray-300">
                  <h6 class="m-0 font-weight-bold text-primary">Modification du mot de passe</h6>
                </div>
                <div class="card-body sm-no-pad-sides">
                  <div class="row no-marg">
                    <div class="col-12 sm-no-pad">
                      <div class="row h-100 sm-no-marg sm-no-pad">
                        <div class="vert-align sm-no-marg sm-no-pad" style="width: 100%">
                          <div class="col-12 space-10px md-hide"></div>
                          <div class="input-group input-group-default col-12 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <span class="input-group-text" id="old-mdp">Ancien mot de passe</span>
                            </div>
                            <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" placeholder="Ancien mot de passe" aria-label="old-mdp" aria-describedby="inputGroup-sizing-lg">
                          </div>
                          <div class="col-12 space-10px"></div>
                          <div class="input-group input-group-default col-12 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <span class="input-group-text" id="new-mdp">Nouveau mot de passe</span>
                            </div>
                            <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" placeholder="Nouveau mot de passe" aria-label="new-mdp" aria-describedby="inputGroup-sizing-lg">
                          </div>
                          <div class="col-12 space-10px"></div>
                          <div class="input-group input-group-default col-12 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <span class="input-group-text" id="confirm-mdp">Confirmation du nouveau mot de passe</span>
                            </div>
                            <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" placeholder="Confirmation du mot de passe" aria-label="confirm-mdp" aria-describedby="inputGroup-sizing-lg">
                          </div>
                          <div class="col-12 space-10px"></div>
                          <div class="col-12 col-md-12 btn-place">
                            <a href="#" class="btn btn-success btn-icon-split float-right">
                              <span class="icon text-white-50">
                                <i class="fas fa-check"></i>
                              </span>
                              <span class="text">Modifier</span>
                            </a>
                          </div>
                          <hr>
                          <span>Votre mot de passe est <code>crypté</code> de façon à ne pas pouvoir être récurépé en clair.</span>
                        </div>
                      </div>
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
