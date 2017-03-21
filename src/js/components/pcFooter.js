import React from 'react';
import { Row,Col } from 'antd';
export default class PCFooter extends React.Component{
	render(){
		return(
			<footer class="footer">
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="footer-container">
						&copy;&nbsp;2016 ReactNews, All Rights Reserved
					</Col>
					<Col span={2}></Col>
				</Row>
			</footer>
		);
	};
}