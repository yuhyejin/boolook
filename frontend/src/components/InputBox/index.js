import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const InputBox = forwardRef((props, ref) => {
    const {
        label,
        type,
        placeholder,
        value,
        error,
        icon,
        message,
        setValue,
        onButtonClick,
        onKeyDown
    } = props;

    // event Handler: input 값 변경 이벤트 처리 함수
    const onChangeHandler = (event) => {
        const { value } = event.target;
        setValue(value);
    };

    const onKeyDownHandler = (event) => {
        if (!onKeyDown) return;
        onKeyDown(event);
    };

    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input
                    ref={ref}
                    type={type}
                    className='input'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                {onButtonClick !== undefined &&
                    <div className='icon-button' onClick={onButtonClick}>
                        {icon !== undefined && <div className={`icon ${icon}`}></div>}
                    </div>
                }
            </div>
            {message !== undefined && <div className='inputbox-message'>{message}</div>}
        </div>
    );
});

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password']).isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    icon: PropTypes.string,
    onButtonClick: PropTypes.func,
    message: PropTypes.string,
    onKeyDown: PropTypes.func
};

export default InputBox;
