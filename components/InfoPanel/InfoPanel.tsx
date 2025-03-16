'use client'
import { useMantineTheme } from '@mantine/core';
import { TitleCard } from '../TitleCard/TitleCard'
import { VehicleInfo } from '../VehicleInfo/VehicleInfo';


export function InfoPanel() {

    const theme = useMantineTheme()

    return(
        <div style={{backgroundColor: theme.colors.gray[9], width: "200pt"}}>
            <TitleCard />
            <VehicleInfo airframe='Quadcopter' firmware='Ardupilot 4.4.2' sysid='1'/>
        </div>
    );
}