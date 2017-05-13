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
            }
        },
        methods: {
            handleRemove(file, fileList) {
                this.fileList = fileList
                this.$emit("filedel",file.response.value)
                removeArrByValue(this.originalFileList,file.response.value)
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
<!--
import fileupload from '../plugin/fileupload.vue'

import {removeArrByValue} from '../util/arrutil.js'

fileList:[],
fileNum:3,


            fileAdd:function (file) {
                this.fileList.push(file)
            },
            fileDel:function (file) {
                removeArrByValue(this.fileList,file)
            },
-->
<style>
</style>
