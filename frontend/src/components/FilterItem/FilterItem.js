// src/FilterSidebar.js
import React from 'react';
import './style.css';

const FilterItem = () => {
    return (
        <div className="filter-sidebar">
            <div className="filter-header">
                <span className="filter-icon" role="img" aria-label="filter">🔍</span> 필터
                <span className="filter-count">0</span>
            </div>

            <div className="filter-group">
                <h4>데이터 제공 방식</h4>
                <label>
                    <input type="radio" name="data-provision" value="all" defaultChecked />
                    <span className="custom-radio"></span> 전체
                </label>
                <label>
                    <input type="radio" name="data-provision" value="monthly" />
                    <span className="custom-radio"></span> 월별
                </label>
                <label>
                    <input type="radio" name="data-provision" value="yearly" />
                    <span className="custom-radio"></span> 연도별
                </label>
            </div>

            <div className="filter-group">
                <h4>대출 기간</h4>
                <label>
                    <input type="radio" name="loan-period" value="current-year" defaultChecked />
                    <span className="custom-radio"></span> 금년
                </label>
                <label>
                    <input type="radio" name="loan-period" value="current-month" />
                    <span className="custom-radio"></span> 금월
                </label>
                <label>
                    <input type="radio" name="loan-period" value="current-week" />
                    <span className="custom-radio"></span> 금주
                </label>
                <label>
                    <input type="radio" name="loan-period" value="custom" />
                    <span className="custom-radio"></span> 기간 설정
                </label>
                <input type="text" className="date-range" placeholder="2024-01-01 ~ 2024-06-06" />
            </div>

            <div className="filter-group">
                <h4>성별</h4>
                <label>
                    <input type="radio" name="gender" value="all" defaultChecked />
                    <span className="custom-radio"></span> 전체
                </label>
                <label>
                    <input type="radio" name="gender" value="male" />
                    <span className="custom-radio"></span> 남성
                </label>
                <label>
                    <input type="radio" name="gender" value="female" />
                    <span className="custom-radio"></span> 여성
                </label>
                <label>
                    <input type="radio" name="gender" value="unknown" />
                    <span className="custom-radio"></span> 미상
                </label>
            </div>

            <div className="filter-group">
                <h4>지역</h4>
                <label>
                    <input type="radio" name="region" value="all" defaultChecked />
                    <span className="custom-radio"></span> 전체
                </label>
                <label>
                    <input type="radio" name="region" value="seoul" />
                    <span className="custom-radio"></span> 서울
                </label>
            </div>

            <div className="filter-group">
                <h4>도서구분</h4>
                <label>
                    <input type="radio" name="book-category" value="all" defaultChecked />
                    <span className="custom-radio"></span> 전체
                </label>
                <label>
                    <input type="radio" name="book-category" value="large-print" />
                    <span className="custom-radio"></span> 큰글씨 도서
                </label>
                <label>
                    <input type="radio" name="book-category" value="foreign-book" />
                    <span className="custom-radio"></span> 국외도서
                </label>
            </div>

            <div className="filter-group">
                <h4>ISBN 부가기호</h4>
                <label>
                    <input type="radio" name="isbn" value="all" defaultChecked />
                    <span className="custom-radio"></span> 전체
                </label>
                <label>
                    <input type="radio" name="isbn" value="goyang" />
                    <span className="custom-radio"></span> 교양
                </label>
                <label>
                    <input type="radio" name="isbn" value="practical" />
                    <span className="custom-radio"></span> 실용
                </label>
                <label>
                    <input type="radio" name="isbn" value="children" />
                    <span className="custom-radio"></span> 아동
                </label>
            </div>
        </div>
    );
};

export default FilterItem;
