import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import classes from './TopBar.module.css';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function TopBar() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map(({ link, label }) => (
        <NavLink
            key={label}
            to={link}
            className={({ isActive }) =>
                isActive ? classes.link + ' ' + classes.active : classes.link
            }
        >
            {label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div className={classes.left}>
                    <img src="/logo.png" alt="Logo" className={classes.logo} />
                </div>
                <div className={classes.center}>
                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>
                </div>
                <div className={classes.right}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                </div>
            </Container>
        </header>
    );
}

export default TopBar;

