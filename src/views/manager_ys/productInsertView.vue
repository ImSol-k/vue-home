<template>
    <div class="wrap">
        <AppHeader />

        <div class="content">
            <div class="main-insert">
                <form class="insertForm" action="submit.php" method="post" enctype="multipart/form-data">
                    <div id="additional-files-wrapper">
                        <div class="input">
                            <label for="profile">상품 대표 이미지:</label>
                            <input type="file" id="profile" name="profile" class="file-input">
                        </div>
                        <div class="input">
                            <label for="title">상품명:</label>
                            <input type="text" id="title" name="title">
                        </div>
                        <div class="input">
                            <label for="price">가&nbsp;&nbsp;&nbsp;격:</label>
                            <input type="text" id="price" name="price"> 원
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

                        <div class="input">
                            <label for="add">추가 첨부 파일:</label>
                            <input type="file" id="add" name="add[]" class="file-input" multiple>
                            <button type="button" class="add-file-button" @click="addFileInput">파일 추가</button>
                        </div>
                    </div>
                </form>
                <form action="submit.php" method="post" enctype="multipart/form-data">
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

export default {
    name: "ProductInsertView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            selectedCategory: ''
        };
    },
    methods: {
        handleCategoryChange(event) {
            this.selectedCategory = event.target.value;
        }
        ,
        addFileInput() {
            var inputFileWrapper = document.getElementById('additional-files-wrapper');
            var fileInputContainer = document.createElement('div');
            fileInputContainer.className = 'input';

            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.name = 'add[]';
            fileInput.className = 'file-input';
            fileInput.multiple = true;

            var removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.className = 'remove-file-button';
            removeButton.textContent = '파일 제거';
            removeButton.onclick = function () {
                inputFileWrapper.removeChild(fileInputContainer);
            };

            fileInputContainer.appendChild(fileInput);
            fileInputContainer.appendChild(removeButton);
            inputFileWrapper.appendChild(fileInputContainer);
        }
    },
};
</script>
