<template>
    <div class="wrap">
        <AppHeaderManager />

        <div class="content">
            <div class="main-insert">
                <form class="form-insert" v-on:submit.prevent="insertProduct" enctype="multipart/form-data">
                    <div id="additional-files-wrapper" class="flex-container">

                        <div class="left">
                            <div class="preview-image">
                                <img :src="previewImage" alt="이미지 미리보기" style="max-width: 300px; max-height: 300px;">
                            </div>

                            <div class="input">
                                <input type="file" id="profile" name="profile" class="file-input" style="width: auto;"
                                    @change="handleImagePreview">
                            </div>
                        </div>

                        <div class="right">
                            <div class="input">
                                <label for="title">상품명:</label>
                                <input type="text" id="title" name="title" v-model="title">
                            </div>

                            <div class="input">
                                <label for="price">가&nbsp;&nbsp;&nbsp;격:</label>
                                <input type="text" id="price" name="price" v-model="price"> 원
                            </div>

                            <div class="input">
                                <select id="category-select" @change="handleCategoryChange">
                                    <option value="" selected disabled hidden>카테고리 선택</option>
                                    <option value="bed">침대</option>
                                    <option value="sofa">소파</option>
                                    <option value="table">테이블</option>
                                    <option value="closet">옷장</option>
                                </select>
                            </div>

                            <div id="subCategoryBed" class="input" v-show="selectedCategory === 'bed'">
                                <select id="subCategoryBedSelect" @change="selectCategory">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option v-bind:value="category[0]">침대</option>
                                    <option v-bind:value="category[1]">매트리스</option>
                                    <option v-bind:value="category[2]">프레임</option>
                                </select>
                            </div>

                            <div id="subCategorySofa" class="input" v-show="selectedCategory === 'sofa'">
                                <select id="subCategorySofaSelect" @change="selectCategory">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option v-bind:value="category[3]">일반소파</option>
                                    <option v-bind:value="category[4]">좌식소파</option>
                                    <option v-bind:value="category[5]">1인용 소파</option>
                                </select>
                            </div>

                            <div id="subCategoryTable" class="input" v-show="selectedCategory === 'table'">
                                <select id="subCategoryTableSelect" @change="selectCategory">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option v-bind:value="category[6]">식탁</option>
                                    <option v-bind:value="category[7]">사이드 테이블</option>
                                </select>
                            </div>

                            <div id="subCategoryCloset" class="input" v-show="selectedCategory === 'closet'">
                                <select id="subCategoryClosetSelect" @change="selectCategory">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option v-bind:value="category[8]">옷장</option>
                                    <option v-bind:value="category[9]">행거</option>
                                    <option v-bind:value="category[10]">붙박이장</option>
                                </select>
                            </div>

                            <div class="input-attach">
                                <label for="add">추가 첨부 파일:&nbsp;</label>
                                <input type="file" id="add" name="add" @change="addContentFile" class="file-input">
                                
                                <button type="button" class="add-file-button" @click="addFileInput">파일 추가</button>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="insert01">등록</button>
                </form>
            </div>
        </div>

        <AppFooter />
    </div><!-- wrap -->
</template>

<script>
import "@/assets/css/managerY/productInsert.css"
import AppHeaderManager from '@/components/AppHeaderManager.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default {
    name: "ProductInsertView",
    components: {
        AppHeaderManager,
        AppFooter
    },
    data() {
        return {
            selectedCategory: '',
            previewImage: '',
            profile: '',
            title: '',
            price: '',
            category: ["bed","mattress","frame","normal-sofa","lounge-sofa","single-sofa","dining-table","side-table","closet","hanger","built-in"],
            add: [],
            selectCate: ""
        };
    },
    methods: {
        handleCategoryChange(event) {
            this.selectedCategory = event.target.value;
        },
        addContentFile(event) {
            this.add.push(event.target.files[0]);
        },
        addFileInput() {
            var rightDiv = document.querySelector('.right'); // right div를 가져옵니다.
            var fileInputContainer = document.createElement('div');
            fileInputContainer.className = 'input-attach';

            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.name = 'add';
            fileInput.className = 'file-input';
            fileInput.multiple = true;
            fileInput.addEventListener('change', (event) => {
                for (let i = 0; i < event.target.files.length; i++) {
                    this.add.push(event.target.files[i]); // 파일을 Vue 컴포넌트의 add 배열에 추가
                }
            });

            var removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.className = 'remove-file-button';
            removeButton.textContent = '파일 제거';
            removeButton.onclick = function () {
                rightDiv.removeChild(fileInputContainer); // right div 안에서 fileInputContainer를 삭제합니다.
            };

            fileInputContainer.appendChild(fileInput);
            fileInputContainer.appendChild(removeButton);
            rightDiv.appendChild(fileInputContainer); // right div 안에 fileInputContainer를 추가합니다.

        },

        // 이미지 선택 시 미리보기 기능
        handleImagePreview(event) {
            // 선택한 파일
            this.profile = event.target.files[0];


            // FileReader 객체를 사용하여 이미지를 읽음
            const reader = new FileReader();

            // 읽기가 완료된 후 실행되는 콜백 함수
            reader.onload = (e) => {
                // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
                this.previewImage = e.target.result;
            };

            // 파일을 읽음
            if (this.profile) {
                reader.readAsDataURL(this.profile);
            }

        },
        selectCategory(event){
            console.log(event.target.value);
            this.selectCate = event.target.value;
        },
        insertProduct() {
            console.log("aa");
            console.log(this.add);
            let formData = new FormData();


            for (let i = 0; i < this.add.length; i++) {
                formData.append('contentFiles', this.add[i]); // 파일을 Vue 컴포넌트의 add 배열에 추가
            }

            //타이틀
            formData.append('title', this.title);
            formData.append('price', this.price);
            formData.append('category', this.selectCate);

            //상품대표사진
            formData.append('profile', this.profile);

            //컨테츠사진들
            // formData.append('contentFiles', JSON.stringify(this.add));

            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/manager/insert`,
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
                responseType: 'json'
            }).then(response => {
                console.log(response);
                console.log(response.data.apiData);
                this.$router.push('/manager/productlist')
            }).catch(error => {
                console.log(error);
            });
        }


    }
};
</script>