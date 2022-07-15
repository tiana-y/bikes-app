import { MAIN_URL } from "./config";

export const getNetworks = () => {
    const path = `${MAIN_URL}/networks`;
}

export const getStationsForNetwork = (currentNetwork) => {
    const path = `${MAIN_URL}/networks/${currentNetwork}`;

}
