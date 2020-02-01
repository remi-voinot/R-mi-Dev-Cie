<?php
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <?php
  importh("Balance");
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

        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Solde / Argent</h1>
          </div>

          <div class="row">

            <div class="col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Mes dépenses (par mois)</div>
                      <div class="mb-0 font-weight-bold text-gray-800">
                        <span class="h5">6,36 € / Par mois</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Mon solde actuelle</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">60.23 €</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-12">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Différentes dépenses crédités ce mois</h6>
                  <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div class="dropdown-header">Autres :</div>
                      <a class="dropdown-item" href="#">Support Commercial</a>
                      <a class="dropdown-item" href="#">Information de paiement</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Voir mes factures</a>
                    </div>
                  </div>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <div class="table-responsive row">
                    <table class="table table-bordered" width="100%">
                      <thead>
                        <tr>
                          <th class="col-9">Dépense</th>
                          <th class="col-3 no-warp text-right">Prix</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th class="col-9">TOTAL</th>
                          <th class="col-3 no-warp text-right">45€ / Mois</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Site de view</td>
                          <td class="no-warp text-right">2€ / Mois</td>
                        </tr>
                        <tr>
                          <td>Bot Custom "Mon-Bot"</td>
                          <td class="no-warp text-right">43€ / Mois</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr>
                  <span>Nous vous créditeront du montant <code>(45€)</code> de votre facture le <code>01/01/2000</code> vers <code>4h30 du matin (Heure GMT+1/Paris)</code>. Nous vous enverons dans les heures voir les jours <code>(8 jours maximum)</code> une facture à l'adresse email renseigné lors de la création du compte (ou l'email actuel si il y a eu changement). Cette facture comprend la date, les différents services souscrits ou crédités.</span>
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-12">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Moyen de paiement actuel</h6>
                  <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div class="dropdown-header"> Changer mon moyens de paiement :</div>
                      <a class="dropdown-item" href="#">Paypal</a>
                      <a class="dropdown-item" href="#">Paiement banquaire</a>
                      <a class="dropdown-item" href="#">Relevé automatique</a>
                    </div>
                  </div>
                </div>
                <!-- Card Body -->
                <div class="card-body row">
                  <div class="col-12 col-md-9">
                    <span>Vous avez choisi <code>Paypal</code> pour allimenter votre solde en argent.</span>
                  </div>
                  <div class="space-10px md-hide"></div>
                  <a href="#" class="col-12 col-md-3 btn btn-warning">
                    <span><i class="fab fa-paypal"></i>  Paypal</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <!-- End of Main Content -->

      <?php footer() ?>

    </div>
    <!-- End of Content Wrapper -->

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