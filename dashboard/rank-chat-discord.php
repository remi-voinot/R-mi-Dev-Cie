<?php
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>


  <?php
  importh("Discord Chat Rank");
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
          <h1 class="h3 mb-2 text-gray-800">Discord Chat Rank</h1>
          <p class="mb-4">Rank de chaque utilisateur en fonction des points pour avoir posté des messages.</p>

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Pseudo</th>
                      <th>Rank</th>
                      <th>Pts</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Icon</th>
                      <th>Pseudo</th>
                      <th>Rank</th>
                      <th>Pts</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td><img class="img-profile rounded-circle w-h-2em" src="https://static.thenounproject.com/png/630740-200.png"></td>
                      <td>T0nPscEd0</td>
                      <td>1</td>
                      <td>869 pts</td>
                    </tr>
                    <tr>
                      <td><img class="img-profile rounded-circle w-h-2em" src="https://static.thenounproject.com/png/630740-200.png"></td>
                      <td>MoN-PscEd0</td>
                      <td>2</td>
                      <td>204 pts</td>
                    </tr>
                    <tr>
                      <td><img class="img-profile rounded-circle w-h-2em" src="https://static.thenounproject.com/png/630740-200.png"></td>
                      <td>Sonpseudo</td>
                      <td>3</td>
                      <td>061 pts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

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

  <!-- Page level plugins -->
  <script src="vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="js/demo/datatables-demo.js"></script>

</body>

</html>