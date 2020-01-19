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
          <h1 class="h3 mb-4 text-gray-800">Mon profile</h1>

          <div class="row">

            <div class="col-12">

              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-gray-300">
                  <h6 class="m-0 font-weight-bold text-primary">T0nPscEd0</h6>
                </div>
                <div class="card-body">
                  <div class="row no-marg">
                    <img src="/img/logos/avatar-gratuit-w.png" class="r-img m-w-110 col-sm-12 col-md-4 md-pad-30" alt="">
                    <div class="col-12 col-md-8 pad-10p">
                      <div class="row h-100 sm-no-marg sm-no-pad">
                        <div class="vert-align sm-no-marg sm-no-pad" style="width: 100%">
                          <div class="col-12 space-10px md-hide"></div>
                          <div class="input-group input-group-lg col-12 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <span class="input-group-text" id="pseudo">Pseudo</span>
                            </div>
                            <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" placeholder="Pseudo" aria-label="pseudo" aria-describedby="inputGroup-sizing-lg">
                          </div>
                          <div class="col-12 space-10px"></div>
                          <div class="input-group input-group-default col-12 col-md-8 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <span class="input-group-text" id="about">About</span>
                            </div>
                            <input type="text" class="form-control sm-left-rounded-input md-placeholder-hide" placeholder="A propos de moi" aria-label="about" aria-describedby="inputGroup-sizing-default">
                          </div>
                          <div class="col-md-4"></div>
                          <div class="col-12 space-10px"></div>
                          <div class="input-group mb-3 col-12 sm-left-rounded-input sm-no-pad">
                            <div class="input-group-prepend sm-hide">
                              <label class="input-group-text" for="inputGroupSelect01">Pays</label>
                            </div>
                            <select class='custom-select' id='states-select'>
                              <option disabled  >Séléctionnez votre <br>pays de résidence :</option>
                              <option value='fr' selected>France</option>
                              <option disabled  >==============</option>
                              <option value='dz'>Algérie</option>
                              <option value='de'>Allemagne</option>
                              <option value='at'>Autriche</option>
                              <option value='be'>Belgique</option>
                              <option value='br'>Brésil</option>
                              <option value='ca'>Canada</option>
                              <option value='es'>Espagne</option>
                              <option value='fr'>France</option>
                              <option value='it'>Italie</option>
                              <option value='ma'>Maroc</option>
                              <option value='mx'>Mexique</option>
                              <option value='nl'>Pays-Bas</option>
                              <option value='pt'>Portugal</option>
                              <option value='ru'>Russie</option>
                              <option value='ch'>Suisse</option>
                              <option value='tn'>Tunisie</option>
                              <option value='us'>USA (Etats Unis)</option>
                              <option value='gb'>United-Kingdoms</option>
                              <option disabled  >==============</option>
                              <option value='zz'>Autre</option>
                            </select>
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