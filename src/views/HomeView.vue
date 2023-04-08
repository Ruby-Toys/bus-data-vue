<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Bus Station Information</a>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <div class="container mt-5">
    <div class="d-flex justify-content-end mb-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        데이터 갱신
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">정류장번호</th>
          <th scope="col">정류장명</th>
          <th scope="col">지번 주소</th>
          <th scope="col">도로명 주소</th>
          <th scope="col">법정동코드</th>
          <th scope="col">위도</th>
          <th scope="col">경도</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">TSB254000096</th>
          <td>양지연립</td>
          <td>서울시</td>
          <td>서울시</td>
          <td>1100000000</td>
          <td>37.094144</td>
          <td>129.049088</td>
        </tr>
        <tr>
          <th scope="row">TSB254000096</th>
          <td>양지연립</td>
          <td>서울시</td>
          <td>서울시</td>
          <td>1100000000</td>
          <td>37.094144</td>
          <td>129.049088</td>
        </tr>
        <tr>
          <th scope="row">TSB254000096</th>
          <td>양지연립</td>
          <td>서울시</td>
          <td>서울시</td>
          <td>1100000000</td>
          <td>37.094144</td>
          <td>129.049088</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            취소
          </button>
          <button type="button" class="btn btn-primary">갱신</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
