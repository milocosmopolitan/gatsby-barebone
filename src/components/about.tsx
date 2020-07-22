import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

export const AboutSectionContent = (props: any) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Container maxWidth="sm">
        <h2>About Business</h2>

        <summary>
          {/* testing long text 1 paragraph, 125 words, 848 bytes. */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut massa tellus. Sed nunc felis, tristique eget consequat a, commodo sit amet odio. Nunc ut tellus non ipsum rhoncus condimentum. Curabitur urna turpis, tincidunt ut consectetur non, vehicula sit amet lacus. Nam ultricies libero et libero consequat, tempor fermentum purus accumsan. Integer viverra, eros sit amet dignissim mattis, sem ante tristique ipsum, sit amet convallis ligula est vel turpis. Nam finibus sed risus vel faucibus. Duis ut tellus sed augue condimentum malesuada et quis est. Maecenas tempus felis sed dui faucibus, lobortis dictum sapien suscipit. Pellentesque convallis urna nec sem venenatis aliquet. Maecenas mollis iaculis leo, ac pretium mauris. Duis a tellus tincidunt, accumsan justo nec, efficitur risus. Vestibulum sagittis nisl in mauris mollis commodo.
          </p>
        </summary>
      </Container>

      <Button variant="contained">Learn more</Button>
    </Box>
  )
}

export const AboutTeam = () => {
  return (
    <>
      <h2>About Team</h2>
    </>
  )
}
