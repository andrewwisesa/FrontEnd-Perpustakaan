<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Anggota</h1>
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
                                    <router-link class="btn btn-danger mb-2" to="/tambahsiswa"><i class="fas fa-plus"></i> Tambah</router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Nama Lengkap</th>
                                            <th>Kelas</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="s in siswa" :key="s.id">
                                                <td>{{ s.id}}</td>
                                                <td>{{ s.nama_siswa }}</td>
                                                <td>{{ s.nama_kelas }}</td>
                                                <td>
                                                    <div class="btn-group">                                                        
                                                        <router-link :to= "{path: '/editsiswa/'+ s.id}" class="btn btn-success"> Edit </router-link>  
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
                siswa: {}
            }
        },
        created() {
            this.GetSiswa();
        },
        methods: {
            GetSiswa(){
                var page = "http://127.0.0.1:8000/api/getallsiswa";
                axios.get(page).then(
                    ({data})=>{
                        console.log(data);
                        this.siswa = data;
                    }
                );
            },
            remove(siswa){
                var url = 'http://127.0.0.1:8000/api/deletesiswa/'+ siswa.id;
                axios.delete(url);
                alert("Sukses delete User");
                this.userLoad;
            }
        }
    }
    </script>