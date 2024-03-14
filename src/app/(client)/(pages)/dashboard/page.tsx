"use client"

import React, { ChangeEvent, useState } from 'react';
import Container from "@/components/Container";
import PageHeader from '@/components/common/layout/PageHeader';
import FeatureCard from '@/components/common/cards/FeatureCard';
import { totals } from '@/data/dashboard/totals';

export default function Dashboard() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    }

    const handleSearchClick = () => {
        console.log(inputValue)
    }

    return (
        <Container>
            <PageHeader
                onChange={handleInputChange}
                title='Dashboard.'
                description='Welcome landlord! check below to see an overview'
                onClick={handleSearchClick}
            />
            <div className='border border-hgray-400 p-10 flex flex-wrap justify-evenly gap-5 rounded-lg'>
                {
                    totals.map((item) => (
                        <FeatureCard key={item.id} variant='text' bottomText={item.bottomText} text={item.text} />
                    ))
                }
            </div>
        </Container>
    );
}