<template>
    <div class="wrap">
        <AppHeader />

        <div class="content">
            <div class="main-insert">
                <form v-on:submit.prevent="insertProduct" enctype="multipart/form-data">
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
                                <select id="subCategoryBedSelect">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option value="bed">침대</option>
                                    <option value="mattress">매트리스</option>
                                    <option value="frame">프레임</option>
                                </select>
                            </div>

                            <div id="subCategorySofa" class="input" v-show="selectedCategory === 'sofa'">
                                <select id="subCategorySofaSelect">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option value="normal-sofa">일반소파</option>
                                    <option value="lounge-sofa">좌식소파</option>
                                    <option value="single-sofa">1인용 소파</option>
                                </select>
                            </div>

                            <div id="subCategoryTable" class="input" v-show="selectedCategory === 'table'">
                                <select id="subCategoryTableSelect">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option value="dining-table">식탁</option>
                                    <option value="side-table">사이드 테이블</option>
                                </select>
                            </div>

                            <div id="subCategoryCloset" class="input" v-show="selectedCategory === 'closet'">
                                <select id="subCategoryClosetSelect">
                                    <option value="" selected disabled hidden>세부 카테고리 선택</option>
                                    <option value="closet">옷장</option>
                                    <option value="hanger">행거</option>
                                    <option value="built-in">붙박이장</option>
                                </select>
                            </div>

                            <div class="input-attach">
                                <label for="add">추가 첨부 파일:&nbsp;</label>
                                <input type="file" id="add" name="add" class="file-input" multiple>
                                <button type="button" class="add-file-button" @click="addFileInput">파일 추가</button>
                            </div>
                        </div>
                    </div>

                </form>
                <form v-on:submit.prevent="insertProduct" method="post" enctype="multipart/form-data">
                    <button type="submit" class="insert01">등록</button>
                </form>
            </div>
        </div>

        <AppFooter />
    </div><!-- wrap -->
</template>

<script>
import "@/assets/css/managerY/productInsert.css"
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default {
    name: "ProductInsertView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            selectedCategory: '',
            previewImage: '',
            profile: '',
            title: '',
            price: '',
            category: '',
            add: []
        };
    },
    methods: {
        handleCategoryChange(event) {
            this.selectedCategory = event.target.value;
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
                this.add.push(event.target.files[0]); // 파일을 Vue 컴포넌트의 add 배열에 추가
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
            const file = event.target.files[0];

            // FileReader 객체를 사용하여 이미지를 읽음
            const reader = new FileReader();

            // 읽기가 완료된 후 실행되는 콜백 함수
            reader.onload = (e) => {
                // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
                this.previewImage = e.target.result;
            };

            // 파일을 읽음
            if (file) {
                reader.readAsDataURL(file);
            }

            this.profile = event.target.value;
        },
        insertProduct() {
            let formData = new FormData();

            const files = document.querySelector('#add').files;
            // for (let i = 0; i < files.length; i++) {
            //     formData.append('add', files[i]);
            //     this.add.push(files[i]);
            // }
            // this.add = files;
            formData.append('imageList', files);
            formData.append('profile', this.profile);
            formData.append('title', this.title);
            formData.append('price', this.price);
            formData.append('category', this.selectedCategory);

            console.log(formData.profile);

            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/manager/insert`,
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
                responseType: 'json'
            }).then(response => {
                console.log(response);
                //console.log(response.data.apiData);
            }).catch(error => {
                console.log(error);
            });
        }


    }
};
</script>