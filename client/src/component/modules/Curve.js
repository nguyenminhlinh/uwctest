import { BundleCurve } from 'react-svg-curve';

function Curve(props) {
    return (
        <svg class="line" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
            <BundleCurve data={props.data} beta={props.temp} showPoints={false} stroke={props.color} strokeWidth={6} />
        </svg>
    )
}
export default Curve;