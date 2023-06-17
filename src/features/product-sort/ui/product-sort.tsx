import React, { useEffect, useState } from 'react';
import styles from './product-sort.module.scss'

interface ProductSortProps {
	sortBy: string;
	sortOrder: string;
	onSortByChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({
																													sortBy,
																													sortOrder,
																													onSortByChange,
																																																			}) => {
	const [selectedValue, setSelectedValue] = useState(`${sortBy}-${sortOrder}`);

	useEffect(() => {
		const savedValue = localStorage.getItem('sortOption');
		if (savedValue) {
			setSelectedValue(savedValue);
		}
	}, []);

	const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setSelectedValue(value);
		localStorage.setItem('sortOption', value);
		onSortByChange(event);
	}

	return (
		<div>
			<select
				id="sortOption"
				value={selectedValue}
				onChange={handleSortByChange}
				className={styles.select}
			>
				<option value="price-desc">Price High To Low</option>
				<option value="price-asc">Price Low To High</option>
				<option value="name-asc">A-Z</option>
				<option value="name-desc">Z-A</option>
			</select>
		</div>
	);
};
