import './styles/ListEmployee.css'
import { FaFilter, FaSortAmountUp } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
//1 props gồm Url, Name, State, Dateonline, Timeonline, Group, Type
function EmployeeInfor(props) {
    const navigate = useNavigate();
    let TypeClass = 'employeeinfor-jobtype'
    let StateClass = 'employeeinfor-state-icon'
    if (props.State === 'Bận') StateClass = 'employeeinfor-state-icon-1'
    if (props.Type === 'COLLECTOR') TypeClass = 'employeeinfor-jobtype-1'
    else if (props.Type === 'JANITOR') TypeClass = 'employeeinfor-jobtype-2'
    const handleClickName = () => {
        console.log(props.Type);
        if(props.Type === 'COLLECTOR') navigate('/Dashboard/DSNV/collectorCalendar')
        else if(props.Type === 'JANITOR') navigate('/Dashboard/DSNV/JanitorCalendar')
    }
    return (
        <div className='employeeinfor-wrap'>
            <div className='employeeinfor-col1'>
                <div className='employeeinfor-img'>
                    <img className='employee-img' src={props.Url} alt='avatar'></img>
                </div>
            </div>
            <div className='employeeinfor-col2'>
                <div className='employeeinfor-name' onClick={() =>handleClickName()}>
                    {props.Name}
                </div>
                <div className='employeeinfor-state'>
                    <div className={StateClass}></div>
                    <div className='employee-state'>{props.State}</div>
                </div>
            </div>
            <div className='employeeinfor-col3'>
                {props.Group}
            </div>
            <div className='employeeinfor-col4'>
                <div className='employeeinfor-date'>
                    {props.Dateonline}
                </div>
                <div className='employeeinfor-time'>
                    {props.Timeonline}
                </div>
            </div>
            <div className='employeeinfor-col5'>
                <div className={TypeClass}>
                    {props.Type}
                </div>
            </div>
            <div className='employeeinfor-col6'>
                <RiMore2Fill className='employeeicon-3dot' size={30} />
            </div>
        </div >
    )
}
function ListEmployee() {
    return (
        <div className='listemployee-wrap'>
            <div className='listemployee-col1'>
            </div>
            <div className='listemployee-col1'>
                <div className='listemployee-header'>
                    <div className='listemployee-header-1'>
                        Danh sách nhân viên
                    </div>
                    <div className='listemployee-header-2'>
                        <div className='listemployee-header-sort'>
                            <div className='listemployee-sort'>Sort</div>
                            <FaSortAmountUp />
                        </div>
                        <div className='listemployee-header-filter'>
                            <div className='listemployee-filter'>Filter</div>
                            <FaFilter />
                        </div>
                    </div>
                </div>
                <div className='listemployee-1'>
                    <div className='listemployee-title'>
                        <div className='employeeinfor-col1'></div>
                        <div className='employeeinfor-col2'>
                            Tên nhân viên
                        </div>
                        <div className='employeeinfor-col3'>
                            Nhóm
                        </div>
                        <div className='employeeinfor-col4'>
                            Date
                        </div>
                        <div className='employeeinfor-col5'>
                            Type
                        </div>
                        <div className='employeeinfor-col6'></div>
                    </div>
                    <EmployeeInfor Url='https://avatars.githubusercontent.com/u/80080225?v=4' Name='Lâm Điền Chinh' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/284236746_1472332759866746_7286972288137256893_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kvom3qAJnX4AX_x-WoO&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfAGacfp6Qv47aXoaYLf-4ykUJof_p7Wj1ymb0D1WlUfGQ&oe=639F63D0' Name='Hà Việt Đức' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://avatars.githubusercontent.com/u/80297364?v=4' Name='Nguyễn Lê Minh Bảo' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://media-exp1.licdn.com/dms/image/D5603AQGzrqFFErIQdg/profile-displayphoto-shrink_800_800/0/1664977617805?e=1676505600&v=beta&t=CdaaYMC3ZUfqplJ1RI_64m-SiqmmAS3CCgzwCo9UQ5g' Name='Nguyễn Minh Mỹ' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/81331171_761868444289043_4413290011462467584_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=n7m_N9qr5dsAX9U0pqi&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBQEJpSag6Re4SlcgtEecPYg50cA3HXHYaXgAa6HfU2lA&oe=63B5913D' Name='Hồ Đức Hưng' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/120356166_2440643712911870_6782207268216428328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=ctgf0ihdmMYAX9PsH_9&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfC5Xo-CQWcJhTuo3F213DmPvzv0_Uk-isAArdFz-m5igg&oe=63B59569' Name='Ngô Gia Phong' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/273628706_1600398320294835_6890860106197091183_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0bluk-COPBIAX-2cPgU&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfAMaupOJ2-Q3lNXBOR0qjkd9iPuz50NtpP9dv4GH0wvRw&oe=639EF22A' Name='Lê Trí Nguyên' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                </div>
            </div>
        </div>
    )
}
export default ListEmployee;