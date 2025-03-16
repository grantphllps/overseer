'use client'
import { useMantineTheme, Title } from '@mantine/core';

interface VehicleInfoProps {
    airframe:   string;
    firmware:   string;
    sysid:      string;
}

export function VehicleInfo({ airframe, firmware, sysid }: VehicleInfoProps) {

    return(
        <center>
            <div>
                <Title
                    order={6}
                    c={"white"}>
                    Airframe: {airframe} 
                </Title>
                <Title
                    order={6}
                    c={"white"}>
                    Firmware: {firmware} 
                </Title>
                <Title 
                    order={6}
                    c={"white"}>
                    System ID: {sysid} 

                </Title>
            </div>
        </center>
    );
}