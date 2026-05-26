interface Avatar {
    filename: string | undefined,
    url: string,
}
export function useAvatars() {

    const avatarModules = import.meta.glob(
        '@/assets/avatars/*.{png,jpg,jpeg,webp}',
        {
            eager: true,
            import: 'default'
        }
    );

    const avatars: Avatar[] = Object.entries(avatarModules).map(([path, url]) => ({
        filename: path.split('/').pop(),
        url: url as string,
    }));


    // const avatars = Object.values(avatarModules);

    return {
        avatars
    };
}