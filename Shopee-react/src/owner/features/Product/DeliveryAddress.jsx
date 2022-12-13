import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// components
import RadioBox from './../../../components/RadioBox';
import ModalAddress from './../Layout/FormAddress';

// icons
import {
    addressMarkerIcon, 
    plusIcon
} from '../../../asset/icon';


const ButtonChange = styled.button`
    text-transform: uppercase;
    font-size: .875rem;
`;


DeliveryAddress.propTypes = {
    listOptionAddress: PropTypes.array,
    onHanldeChoseAdministrativeUnit: PropTypes.func.isRequired,
    onHandleInitAdministrativeUnit: PropTypes.func.isRequired,
    onHandleAddAddress: PropTypes.func.isRequired,
    listAddress: PropTypes.array.isRequired,
    onChoseOtherAddress: PropTypes.func.isRequired,
};

DeliveryAddress.defaultProps = {
    listOptionAddress: []
}

function DeliveryAddress({
    listAddress,
    listOptionAddress,
    onHanldeChoseAdministrativeUnit,
    onHandleInitAdministrativeUnit,
    onHandleAddAddress,
    onChoseOtherAddress
}) {

    const [receivedAddress, setDeliveryAddress] = useState(null)
    const [isShowListAddress, setIsShowListAddress] = useState(false);
    const [isOpenModalAddress, setIsOpenModalAddress] = useState(false);
    const [addressIdFocus, setAddressIdFocus] = useState("");

    // useEffect
    useEffect(() => {
        const receivedAddress = listAddress ? listAddress.find(address => address.isDefault) : null;
        setAddressIdFocus(receivedAddress ? receivedAddress._id : "");
        setDeliveryAddress(receivedAddress);
    }, [listAddress])

    useEffect(() => {
        if(onChoseOtherAddress) {
            onChoseOtherAddress(addressIdFocus);
        }
    }, [addressIdFocus])

    // handle event
    const onHandleOpenListAddress = () => {
        setIsShowListAddress(true);
    }

    const onHandleCloseListAddress = () => {
        setAddressIdFocus(receivedAddress ? receivedAddress._id : "");
        setIsShowListAddress(false);
    }

    const onHandleCloseModalAddress = () => {
        setIsOpenModalAddress(false)
    }

    const onHandleOpenAddressModal = () => {
        onHandleInitAdministrativeUnit()
        setIsOpenModalAddress(true);
    }

    const onHanldeChose = dataChose => {
        if(!onHanldeChoseAdministrativeUnit) return;
        onHanldeChoseAdministrativeUnit(dataChose);
    }

    const onHandleAddNewAddress = addressData => {
        if(!onHandleAddAddress) return;
        onHandleAddAddress(addressData)
    }

    const onHandleChose = identification => {
        setAddressIdFocus(identification.addressId);
    }

    const onHandleUpdateReceivedAddress = () => {
        setDeliveryAddress(listAddress.find(address => address._id === addressIdFocus));
        setIsShowListAddress(false);
    }

    // render
    const renderReceivedAddress = () => {
        if(!isShowListAddress && receivedAddress) {
            return (
                <div className="d-flex justify-content-between address-selected">
                    <div className="user-information">
                        <span>{receivedAddress.fullname}</span><br />
                        <span>(84+) {receivedAddress.phoneNumber}</span>
                    </div>
                    <div className="user-address">
                        {`${receivedAddress.houseNumber}, ${receivedAddress.ward}, ${receivedAddress.district}, ${receivedAddress.province}`}
                            
                        {receivedAddress.isDefault && <span>Mặc định</span>}
                    </div>
                    <ButtonChange onClick={onHandleOpenListAddress}>Thay đổi</ButtonChange>
                </div>
            );
        }

        return null;
    }

    const renderModalAddress = () => {
        if(isOpenModalAddress || (Array.isArray(listAddress) && listAddress.length === 0)) {
            return (
                <ModalAddress 
                    itemFocus = {null}

                    listOptionAddress = {listOptionAddress}
                    onHandleClose = {onHandleCloseModalAddress}
                    onHanldeChoseAdministrativeUnit = {onHanldeChose}
                    onHandleAdd = {onHandleAddNewAddress}
                />
            );
        }

        return null;
    }

    const renderListAddress = () => {
        if(isShowListAddress) {
            return listAddress.map(address => {
                return (
                    <div className="address-item" key = {address._id}>
                        <RadioBox
                            onChose = {onHandleChose}
                            identification = {{addressId: address._id}}
                            isCheck = {addressIdFocus === address._id}
                        />
                        <div className="user-information">
                            <span>{address.fullname}</span><br />
                            <span>(84+) {address.phoneNumber}</span>
                        </div>
                        <div className="user-address">
                            {`${address.houseNumber}, ${address.ward}, ${address.district}, ${address.province}`}
                            
                            {address.isDefault && <span>Mặc định</span>}
                            
                        </div>
                    </div>
                );
            })
        }
    }

    return (
        <div className="delivery-address__container"> 
            <div className = "received-address">
                <div className="container">
                    <div className="received-address__container">
                        <div className="border"></div>
                        
                        <div className="d-flex align-items-center justify-content-between title">
                            <h5 className="d-flex align-items-center">{addressMarkerIcon}Địa chỉ Xuất hàng</h5>

                            {isShowListAddress && 
                                <div>
                                    <button 
                                        onClick = {onHandleOpenAddressModal}
                                        className="d-inline-flex align-items-center btn"
                                    >{plusIcon}Thêm địa chỉ mới</button>
                                    <Link to="/user/address" className="btn">Thiết lập địa chỉ</Link>
                                </div>
                            }
                        </div>
                        

                        {isShowListAddress && <>
                            <div className="list-address">
                                {renderListAddress()}
                            </div>

                            <div className="buttons">
                                <button 
                                    className="btn btn-save"
                                    onClick = {onHandleUpdateReceivedAddress}
                                >Hoàn thành</button>
                                <button 
                                    className="btn btn-back"
                                    onClick = {onHandleCloseListAddress}
                                >Trở lại</button>
                            </div>
                        </>}

                        {renderReceivedAddress()}
                    </div>
                </div>

                {renderModalAddress()}
            </div>
        </div>
        
    );
}

export default DeliveryAddress;