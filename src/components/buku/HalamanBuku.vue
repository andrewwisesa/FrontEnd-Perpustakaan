<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Buku</h1>
                        </div>          
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <router-link class="btn btn-danger mb-2" to="/tambahbuku">
                                        <i class="fas fa-plus"></i> Tambah</router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">No</th>
                                            <th>Judul Buku</th>
                                            <th>Pengarang</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="s in buku" :key="s.id">
                                                <td>{{ s.id_buku}}</td>
                                                <td>{{ s.judul_buku }}</td>
                                                <td>{{ s.penggarang }}</td>
                                                <td>
                                                    <div class="btn-group">                                                        
                                                        <router-link :to= "{path: '/editbuku/'+ s.id_buku}" class="btn btn-warning"> Edit </router-link> 
                                                        <button type="button" @click="remove(s)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td>
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
</template>

<script>

    import Vue from 'vue';
    import axios from 'axios';

    Vue.use(axios);

    export default {
        
        data() {
            return{
                buku: {}
            }
        },
        created() {
            this.GetBuku();
        },
        methods: {
            GetBuku(){
                var page = "http://127.0.0.1:8000/api/getbuku";
                axios.get(page).then(
                    ({data})=>{
                        console.log(data);
                        this.buku = data;
                    }
                );
            },
            remove(buku){
                var url = 'http://127.0.0.1:8000/api/deletebuku/'+ buku.id_buku;
                axios.delete(url);
                alert("Sukses delete Buku");
                this.userLoad;
            }
        }
    }
    </script>