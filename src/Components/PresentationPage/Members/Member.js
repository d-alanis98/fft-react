import React from 'react';
//Components
import ResourceLink from '../../Miscelaneous/ResourceLink';
//Datasource
import Members from './MembersData';


const Member = ({ memberId, className }) => {
    const member = Members[memberId];

    return(
        <div className={ `card bg-members border-0 rounded-lg ${ className }` }>
            <div className='card-img'>
                <ResourceLink
                    href = { member.github }
                >
                    <img src={ member.avatar } className='rounded-lg my-3' height='60px' />
                </ResourceLink>             
            </div>
            <div className='card-body'>
                <ResourceLink
                    href = { member.github }
                >
                    { member.name }
                </ResourceLink>
            </div>
        </div>
    )
}

export default Member;