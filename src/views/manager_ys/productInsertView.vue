<template>
    <div class="wrap">
        <div class="header">
            <h1>header</h1>
        </div><!-- header -->
        <div class="content">
            <div class="main-insert">
                <form action="submit.php" method="post" enctype="multipart/form-data">
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
                            <label for="price">가격:</label>
                            <input type="text" id="price" name="price"> 원
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
    </div><!-- wrap -->
</template>


<script>
import "@/assets/css/managerY/productInsert.css"
export default {
    name: "ProductInsertView",
    components: {},
    data() {
        return {};
    },
    methods: {
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