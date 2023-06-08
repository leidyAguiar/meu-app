const user = {
    name: 'Katherine Johnson',
    imageUrl: 'https://i.imgur.com/MK3eW3As.jpg',
    imageSize: 90,
};

export default function ProfileKatherine() {
    return (
        <>
        <h1>{user.name}</h1>
        <img className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }}
        />
        </>
    );
}