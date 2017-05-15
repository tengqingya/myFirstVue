<!--
@author tengqingya
@create 2017-05-13 15:57
-->
<template>
    <div>
        <el-upload
                action="/manage/upload/pic"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-change="handleChange"
                :on-success="handleSuccess"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Upload, Dialog} from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'

    Vue.use(Upload);
    Vue.use(Dialog);

    export default {
        name: "fileUpload",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                fileList: [],
                originalFileList:[]
            };
        },
        props: {
            num:{
                type: Number,
                default: 1
            },
            files:Array
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file)
                this.fileList = fileList
                this.$emit("filedel",file.response?file.response.value:file.url)
                removeArrByValue(this.originalFileList,file.response?file.response.value:file.url)
            },
            handleSuccess(response, file, fileList){
                this.originalFileList.push(file.response.value)
                this.$emit("fileadd",file.response.value)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleChange(file, fileList) {
                if(this.fileList && this.fileList.length == this.num){
                    this.fileList = fileList.slice(-this.num)
                    this.$emit("filedel",this.originalFileList[0])
                    this.originalFileList = this.originalFileList.slice(-this.num);
                }else {
                    this.fileList = fileList
                }
            }
        },
        watch:{
            files:function (e) {
                let arr = [];
                this.originalFileList = []
                e.forEach((i, j)=> {
                    arr.push({"name":i.name,"url":i.raw.url})
                    this.originalFileList.push(i.raw.url)
                })
                this.fileList = arr
            }
        }
    }


    const removeArrByValue = (arr, val)=> {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }
</script>

<style>
    .el-upload__input{
        display: none !important;
    }
</style>
<!--
import fileupload from '../plugin/fileupload.vue'
import {removeArrByValue} from '../util/arrutil.js'
import {rowFile} from '../util/file.js'

<fileupload @fileadd="fileAdd" @filedel="fileDel" :files="fileShow" :num="fileNum"></fileupload>

            fileAdd:function (file) {
                this.fileList.push(file)
            },
            fileDel:function (file) {
                removeArrByValue(this.fileList,file)
            },

            fileList:[],
            fileShow:[],
            fileNum:3,

            this.fileList = ["http://image.meizu.com/image/ebook/823df1d1320742efabebe46565518abaz/auto"]
              this.fileShow = [new rowFile("http://image.meizu.com/image/ebook/823df1d1320742efabebe46565518abaz/auto")]


-->
