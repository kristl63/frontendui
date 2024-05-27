const GroupsList = ({ groups }) => {
    if (!groups || groups.length === 0) {
        return <p>No groups available</p>;
    }

    return (
        <ul>
            {groups.map((group) => (
                <li key={group.id}>
                    <p>Group Name: {group.name}</p>
                    {/* If there are nested lists within a group, you can further iterate through them here */}
                    {/* For example, if there are sub-groups: */}
                    {group.subGroups && group.subGroups.length > 0 && (
                        <ul>
                            {group.subGroups.map((subGroup) => (
                                <li key={subGroup.id}>{subGroup.name}</li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};
