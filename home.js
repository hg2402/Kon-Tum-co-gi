document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestions');

    // Từ điển ánh xạ từ từ khóa tìm kiếm đến các trang đích
    const searchMappings = {
        'cafe de măng đen, măng đen': 'CafeDeMangDen.html',
        'nhà thờ gỗ, kon tum': 'NhaThoGo.html',
        'eva cafe, măng đen': 'Eva.html',
        'de vivre cafe, măng đen': 'Devivre.html',
        'xám cafe, kon tum': 'Xam.html',
        'bonne cafe, kon tum': 'Bonne.html',
        'the dé, kon tum': 'TheDe.html',
        'thác pa sỹ, măng đen': 'ThacPaSy.html',
        'rừng thông, măng đen': 'Pineforest.html',
        'hồ đắk ke, măng đen': 'HDK.html',
        'tòa giám mục, kon tum': 'ToaGiamMuc.html',
        'ngục kon tum, kon tum': 'NgucKonTum.html',
        'việt úc flower garden, măng đen': 'VietUcflowergarden.html',
        'the pad thái, kon tum': 'padthai.html',
        'mì cay kitachi, kon tum': 'Kitachi.html',
        'dookki, kon tum': 'Dookki.html',
        // Thêm các từ khóa và trang đích khác tại đây
    };

    // Chuyển đổi từ điển thành mảng để tìm kiếm
    const searchKeys = Object.keys(searchMappings);

    // Hàm hiển thị gợi ý
    function showSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        suggestionsBox.innerHTML = ''; // Xóa các gợi ý cũ
        if (inputValue) {
            const filteredKeys = searchKeys.filter(key => key.toLowerCase().includes(inputValue));
            filteredKeys.forEach(key => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = key;
                div.addEventListener('click', function() {
                    searchInput.value = key;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                    window.location.href = searchMappings[key.toLowerCase()];
                });
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = filteredKeys.length > 0 ? 'block' : 'none';
        } else {
            // Hiển thị tất cả gợi ý khi không có giá trị nhập vào
            searchKeys.forEach(key => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = key;
                div.addEventListener('click', function() {
                    searchInput.value = key;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                    window.location.href = searchMappings[key.toLowerCase()];
                });
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        }
    }

    // Xử lý sự kiện nhập vào ô tìm kiếm
    searchInput.addEventListener('input', function() {
        showSuggestions(this.value);
    });

    // Xử lý form submit
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định
        const query = searchInput.value.trim().toLowerCase();
        if (searchMappings[query]) {
            window.location.href = searchMappings[query];
        } else {
            alert('Không tìm thấy kết quả phù hợp.');
        }
    });

    // Ẩn gợi ý khi nhấp ra ngoài
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target)) {
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
        }
    });
});
