import type { Context, FC, Dispatch, SetStateAction } from 'react';

export type StaticProps = {
    Header: FC;
    Content: FC;
    Context: Context<AccordionContextType>;
};

export type AccordionContextType = [
    boolean /** Current active state */,
    Dispatch<SetStateAction<boolean>> /** Function to be called to toggle the active state */
];
